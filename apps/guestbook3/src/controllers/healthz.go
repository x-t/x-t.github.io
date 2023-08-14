// x-t.github.io (c) 2023
// This work is licensed under the Creative Commons
// Attribution-NonCommercial-ShareAlike 4.0 International
// License. To view a copy of this license, visit
// http://creativecommons.org/licenses/by-nc-sa/4.0/ or
// send a letter to Creative Commons, PO Box 1866,
// Mountain View, CA 94042, USA.

package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"x-t/guestbook3/src/providers"
)

func Healthz(c *gin.Context) {
	if err := providers.DBMap.Db.Ping(); err != nil {
		c.String(http.StatusInternalServerError, "no")
		return
	}

	c.String(http.StatusOK, "ok")
}
