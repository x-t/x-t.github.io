package admin

import (
	"net/http"
	"os"
	"x-t/guestbook3/src/settings"

	"github.com/gin-gonic/gin"
)

func Server(c *gin.Context) {
	c.HTML(http.StatusOK, "admin/server.html", gin.H{
		"Region":          os.Getenv("FLY_REGION"),
		"DSN":             os.Getenv(settings.EnvDatabaseConnection),
		"CorsEndpoints":   os.Getenv(settings.EnvCorsList),
		"TurnstileSecret": os.Getenv(settings.EnvTurnstileSecret),
		"Email":           os.Getenv(settings.EnvEmail),
		"PgpKey":          os.Getenv(settings.EnvPgpKey),
		"AdminUsername":   os.Getenv(settings.EnvAdminUsername),
		"AdminSecretHash": os.Getenv(settings.EnvAdminSecretHash),
	})
}
