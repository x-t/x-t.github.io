// x-t.github.io (c) 2023
// This work is licensed under the Creative Commons
// Attribution-NonCommercial-ShareAlike 4.0 International
// License. To view a copy of this license, visit
// http://creativecommons.org/licenses/by-nc-sa/4.0/ or
// send a letter to Creative Commons, PO Box 1866,
// Mountain View, CA 94042, USA.

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
		"select id, name, "+
			"comment, created_at, "+
			"created_ip from post where id = $1 limit 1",
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
