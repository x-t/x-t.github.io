package admin

import (
	"net/http"
	"x-t/guestbook3/src/models"
	"x-t/guestbook3/src/providers"

	"github.com/gin-gonic/gin"
)

func Panel(c *gin.Context) {
	var posts []models.Post

	_, err := providers.DBMap.Select(&posts,
		"select * from post")

	if err != nil {
		c.String(http.StatusInternalServerError, "server's cooked")
		return
	}

	providers.ReverseArray(posts)

	c.HTML(http.StatusOK, "admin/panel.html", gin.H{
		"posts": posts,
	})
}
