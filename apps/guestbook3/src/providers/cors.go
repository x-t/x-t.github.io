package providers

import (
	"github.com/gin-gonic/gin"
	"golang.org/x/exp/slices"
	"net/http"
	"os"
	"strings"
	"x-t/guestbook3/src/settings"
)

func Cors() gin.HandlerFunc {
	return func(c *gin.Context) {
		if c.Request.URL.Path == "/_healthz" {
			c.Next()
			return
		}

		reqFrom := c.Request.Header.Get("Origin")
		corsList := strings.Split(os.Getenv(settings.EnvCorsList), ",")

		if !slices.Contains(corsList, reqFrom) {
			c.AbortWithStatus(http.StatusForbidden)
		}

		//c.Writer.Header().Add("Access-Control-Allow-Origin", "*")

		c.Writer.Header().Add("Access-Control-Allow-Origin", reqFrom)
		c.Writer.Header().Set("Access-Control-Max-Age", "86400")
		c.Writer.Header().Set("Access-Control-Allow-Methods",
			"POST, GET, OPTIONS, PUT, DELETE, UPDATE")
		c.Writer.Header().Set("Access-Control-Allow-Headers",
			"Origin, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, HX-Boosted, HX-Current-URL, HX-History-Restore-Request, HX-Prompt, HX-Request, HX-Target, HX-Trigger-Name, HX-Trigger")
		c.Writer.Header().Set("Access-Control-Expose-Headers",
			"Content-Length, HX-Location, HX-Push-Url, HX-Redirect, HX-Refresh, HX-Replace-Url, HX-Reswap, HX-Retarget, HX-Reselect, HX-Trigger, HX-Trigger-After-Settle, HX-Trigger-After-Swap")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(200)
			return
		}

		c.Next()
	}
}
