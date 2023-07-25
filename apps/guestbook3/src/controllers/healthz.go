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
