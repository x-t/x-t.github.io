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
		"select * from post where `id` = ? limit 1",
		id)

	if err != nil {
		c.HTML(http.StatusInternalServerError,
			"admin/error.html", gin.H{
				"error": fmt.Sprintf("uh oh %v", err),
			})
		return
	}

	_, err = providers.DBMap.Delete(&postToDelete)

	if err != nil {
		c.HTML(http.StatusInternalServerError,
			"admin/error.html", gin.H{
				"error": fmt.Sprintf("AAAAAAAAA!! %v", err),
			})
		return
	}

	c.Header("HX-Location", "/admin/panel")
	c.String(http.StatusNoContent, "")
}
