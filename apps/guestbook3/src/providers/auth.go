package providers

import (
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

func AuthRequired(c *gin.Context) {
	session := sessions.Default(c)
	user := session.Get("user")

	if user == nil {
		c.HTML(http.StatusUnauthorized, "admin/error.html", gin.H{
			"error": "you cannot do this.",
		})
		c.Abort()
		return
	}

	c.Next()
}
