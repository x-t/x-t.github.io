package controllers

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"os"
	"strings"
	"x-t/guestbook3/src/models"
	"x-t/guestbook3/src/providers"
	"x-t/guestbook3/src/settings"
)

func EmailVerify(c *gin.Context) {
	var request models.EmailRequest
	err := c.Bind(&request)
	if err != nil {
		log.Printf("unable to bind form: %v", err)
		c.String(http.StatusBadRequest, "invalid request")
		return
	}

	success, err := providers.VerifyCaptcha(request.CaptchaResponse)
	if err != nil || !success {
		log.Printf("captcha verification failed: %v", err)
		c.String(http.StatusForbidden, "captcha verification failed")
		return
	}

	c.HTML(http.StatusOK, "captcha_response.html.tmpl", gin.H{
		"mail":     os.Getenv(settings.EnvEmail),
		"keyblock": strings.ReplaceAll(os.Getenv(settings.EnvPgpKey), "\\n", "\n"),
	})
}
