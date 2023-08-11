package admin

import (
	"fmt"
	"net/http"
	"x-t/guestbook3/src/models"
	"x-t/guestbook3/src/providers"

	"github.com/gin-gonic/gin"
)

func Delete(c *gin.Context) {
	id := c.Param("id")
	var postToDelete models.Post
	err := providers.DBMap.SelectOne(&postToDelete,
		"select `id`, coalesce(`name`, '') `name`, "+
			"`comment`, `created_at`, coalesce(`created_ip`, '') "+
			"`created_ip` from post where `id` = ? limit 1",
		id)

	if err != nil {
		c.HTML(http.StatusInternalServerError,
			"admin/error.html", gin.H{
				"error": fmt.Sprintf("uh oh %v", err),
			})
		panic(err)
	}

	_, err = providers.DBMap.Delete(&postToDelete)

	if err != nil {
		c.HTML(http.StatusInternalServerError,
			"admin/error.html", gin.H{
				"error": fmt.Sprintf("AAAAAAAAA!! %v", err),
			})
		panic(err)
	}

	c.Header("HX-Location", "/admin/panel")
	c.String(http.StatusNoContent, "")
}
