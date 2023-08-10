package admin

import (
	"fmt"
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

func Logout(c *gin.Context) {
	session := sessions.Default(c)
	user := session.Get("user")
	if user == nil {
		c.HTML(http.StatusBadRequest, "admin/error.html", gin.H{
			"error": "your token burned down",
		})
		return
	}

	session.Delete("user")
	if err := session.Save(); err != nil {
		c.HTML(http.StatusBadRequest, "admin/error.html", gin.H{
			"error": fmt.Sprintf("server has exploded. %v", err),
		})
		return
	}

	c.Redirect(http.StatusFound, "/admin")
}
