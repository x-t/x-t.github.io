package admin

import (
	"fmt"
	"net/http"
	"x-t/guestbook3/src/models"
	"x-t/guestbook3/src/providers"

	"github.com/gin-gonic/gin"
)

func Panel(c *gin.Context) {
	var posts []models.Post

	_, err := providers.DBMap.Select(&posts,
		"select `id`, coalesce(`name`, '') `name`, "+
			"`comment`, `created_at`, coalesce(`created_ip`, '') "+
			"`created_ip` from post")

	if err != nil {
		c.String(http.StatusInternalServerError,
			fmt.Sprintf("server's cooked %v", err))
		return
	}

	providers.ReverseArray(posts)

	c.HTML(http.StatusOK, "admin/panel.html", gin.H{
		"posts": posts,
	})
}
