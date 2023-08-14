// x-t.github.io (c) 2023
// This work is licensed under the Creative Commons
// Attribution-NonCommercial-ShareAlike 4.0 International
// License. To view a copy of this license, visit
// http://creativecommons.org/licenses/by-nc-sa/4.0/ or
// send a letter to Creative Commons, PO Box 1866,
// Mountain View, CA 94042, USA.

package admin

import (
	"net/http"
	"os"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

func About(c *gin.Context) {
	session := sessions.Default(c)
	user := session.Get("user")

	if user != nil {
		c.Redirect(http.StatusFound, "/admin/panel")
		return
	}

	c.HTML(http.StatusOK, "admin/about.html", gin.H{
		"region": os.Getenv("FLY_REGION"),
	})
}
