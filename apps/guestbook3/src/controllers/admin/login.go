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
	"os"
	"x-t/guestbook3/src/settings"

	"golang.org/x/crypto/bcrypt"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

type LoginRequest struct {
	Username string `form:"username" binding:"required"`
	Password string `form:"password" binding:"required"`
}

func Login(c *gin.Context) {
	session := sessions.Default(c)
	login_request := &LoginRequest{}

	if err := c.Bind(login_request); err != nil {
		c.HTML(http.StatusBadRequest, "admin/error.html", gin.H{
			"error": "invalid login",
		})
		return
	}

	username := os.Getenv(settings.EnvAdminUsername)
	password := os.Getenv(settings.EnvAdminSecretHash)

	err := bcrypt.CompareHashAndPassword([]byte(password), []byte(login_request.Password))

	if err != nil || username != login_request.Username {
		c.HTML(http.StatusBadRequest, "admin/error.html", gin.H{
			"error": fmt.Sprintf("the gate shall be closed. %v", err),
		})
		return
	}

	session.Set("user", username)
	if err := session.Save(); err != nil {
		c.HTML(http.StatusBadRequest, "admin/error.html", gin.H{
			"error": fmt.Sprintf("server has exploded. %v", err),
		})
		panic(err)
	}

	c.Header("HX-Location", "/admin/panel")
	c.String(http.StatusOK, "")
}
