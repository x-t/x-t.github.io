// x-t.github.io (c) 2023
// This work is licensed under the Creative Commons
// Attribution-NonCommercial-ShareAlike 4.0 International
// License. To view a copy of this license, visit
// http://creativecommons.org/licenses/by-nc-sa/4.0/ or
// send a letter to Creative Commons, PO Box 1866,
// Mountain View, CA 94042, USA.

package mailguard

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
	if err != nil {
		log.Printf("captcha verification failed: %v", err)
		c.String(http.StatusForbidden, "captcha verification failed")
		panic(err)
	}

	if !success {
		c.String(http.StatusForbidden, "failed captcha - are you a bot?")
		return
	}

	c.HTML(http.StatusOK, "mailguard/captcha_response.html", gin.H{
		"mail":     os.Getenv(settings.EnvEmail),
		"keyblock": strings.ReplaceAll(os.Getenv(settings.EnvPgpKey), "\\n", "\n"),
	})
}
