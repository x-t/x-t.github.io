package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func Healthz(c *gin.Context) {
	if err := DBMap.Db.Ping(); err != nil {
		c.String(http.StatusInternalServerError, "no")
		return
	}

	c.String(http.StatusOK, "ok")
}
