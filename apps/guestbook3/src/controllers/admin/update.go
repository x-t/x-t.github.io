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

type UpdateRequest struct {
	Name    string `form:"name"`
	Comment string `form:"comment" binding:"required"`
}

func Update(c *gin.Context) {
	request := &UpdateRequest{}
	err := c.Bind(request)
	if err != nil {
		c.HTML(http.StatusBadRequest, "admin/error.html", gin.H{
			"error": fmt.Sprintf("broke. %v", err),
		})
		panic(err)
	}

	id := c.Param("id")
	var postToUpdate models.Post
	err = providers.DBMap.SelectOne(&postToUpdate,
		"select id, name, "+
			"comment, created_at, "+
			"created_ip from post where id = $1 limit 1",
		id)

	if err != nil {
		c.HTML(http.StatusInternalServerError,
			"admin/error.html", gin.H{
				"error": fmt.Sprintf("server broke %v", err),
			})
		panic(err)
	}

	postToUpdate.Name = request.Name
	postToUpdate.Comment = request.Comment

	_, err = providers.DBMap.Update(&postToUpdate)

	if err != nil {
		c.HTML(http.StatusInternalServerError,
			"admin/error.html", gin.H{
				"error": fmt.Sprintf("sysadmin kidnapped %v", err),
			})
		panic(err)
	}

	c.Redirect(http.StatusFound, "/admin/panel")
}
