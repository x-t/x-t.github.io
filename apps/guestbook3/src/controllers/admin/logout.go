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

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

func Logout(c *gin.Context) {
	session := sessions.Default(c)
	user := session.Get("user")
	if user == nil {
		c.HTML(http.StatusBadRequest, "admin/error.html", gin.H{
			"error": "your token burned down",
		})
		return
	}

	session.Delete("user")
	if err := session.Save(); err != nil {
		c.HTML(http.StatusBadRequest, "admin/error.html", gin.H{
			"error": fmt.Sprintf("server has exploded. %v", err),
		})
		panic(err)
	}

	c.Redirect(http.StatusFound, "/admin")
}
