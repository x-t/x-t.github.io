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

func Panel(c *gin.Context) {
	var posts []models.Post

	_, err := providers.DBMap.Select(&posts,
		"select id, name, "+
			"comment, created_at, "+
			"created_ip from post")

	if err != nil {
		c.String(http.StatusInternalServerError,
			fmt.Sprintf("server's cooked %v", err))
		panic(err)
	}

	providers.ReverseArray(posts)

	c.HTML(http.StatusOK, "admin/panel.html", gin.H{
		"posts": posts,
	})
}
