package admin

import (
	"fmt"
	"net/http"
	"x-t/guestbook3/src/models"
	"x-t/guestbook3/src/providers"

	"github.com/gin-gonic/gin"
)

func Edit(c *gin.Context) {
	var thisPost models.Post
	err := providers.DBMap.SelectOne(&thisPost,
		"select `id`, coalesce(`name`, '') `name`, "+
			"`comment`, `created_at`, coalesce(`created_ip`, '') "+
			"`created_ip` from post where `id` = ? limit 1",
		c.Param("id"))

	if err != nil {
		c.HTML(http.StatusInternalServerError,
			"admin/error.html", gin.H{
				"error": fmt.Sprintf("🤷‍♂️ %v", err),
			})
		panic(err)
	}

	c.HTML(http.StatusOK, "admin/edit.html", gin.H{
		"post": thisPost,
	})
}
