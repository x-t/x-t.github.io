package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func Index(c *gin.Context) {
	c.Redirect(http.StatusTemporaryRedirect, "https://x-t.github.io")
}
