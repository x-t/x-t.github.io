package admin

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

func Index(c *gin.Context) {
	session := sessions.Default(c)
	user := session.Get("user")

	if user != nil {
		c.Redirect(http.StatusFound, "/admin/panel")
		return
	}

	c.HTML(http.StatusOK, "admin/index.html", gin.H{
		"year": fmt.Sprint(time.Now().Year()),
	})
}
