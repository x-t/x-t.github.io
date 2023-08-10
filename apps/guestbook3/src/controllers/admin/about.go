package admin

import (
	"net/http"
	"os"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

func About(c *gin.Context) {
	session := sessions.Default(c)
	user := session.Get("user")

	if user != nil {
		c.Redirect(http.StatusFound, "/admin/panel")
		return
	}

	c.HTML(http.StatusOK, "admin/about.html", gin.H{
		"region": os.Getenv("FLY_REGION"),
	})
}
