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

func Edit(c *gin.Context) {
	var thisPost models.Post
	err := providers.DBMap.SelectOne(&thisPost,
		"select id, name, "+
			"comment, created_at, "+
			"created_ip from post where id = $1 limit 1",
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
