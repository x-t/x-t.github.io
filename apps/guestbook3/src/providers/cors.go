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
		// CORS should only be enabled for routes on /api
		if !strings.HasPrefix(c.Request.URL.Path, "/api") {
			c.Next()
			return
		}

		reqFrom := c.Request.Header.Get("Origin")
		corsList := strings.Split(os.Getenv(settings.EnvCorsList), ",")

		// If you're getting data from an origin
		// without allowed CORS, is there any point?
		if !slices.Contains(corsList, reqFrom) {
			c.AbortWithStatus(http.StatusForbidden)
			return
		}

		/*
			HTMX has a ton of headers that are useful.
			https://htmx.org/reference/#request_headers
			https://htmx.org/reference/#response_headers
		*/
		// In development, we can allow all origins.
		if os.Getenv("GIN_MODE") != "release" {
			c.Writer.Header().Add("Access-Control-Allow-Origin", "*")
		} else {
			c.Writer.Header().Add("Access-Control-Allow-Origin", reqFrom)
		}
		c.Writer.Header().Set("Access-Control-Max-Age", "86400")
		c.Writer.Header().Set("Access-Control-Allow-Methods",
			"POST, GET, OPTIONS, PUT, DELETE, UPDATE")
		c.Writer.Header().Set("Access-Control-Allow-Headers",
			"Origin, Content-Type, Content-Length, Accept-Encoding, "+
				"X-CSRF-Token, Authorization, HX-Boosted, HX-Current-URL, "+
				"HX-History-Restore-Request, HX-Prompt, HX-Request, "+
				"HX-Target, HX-Trigger-Name, HX-Trigger")
		c.Writer.Header().Set("Access-Control-Expose-Headers",
			"Content-Length, HX-Location, HX-Push-Url, HX-Redirect, "+
				"HX-Refresh, HX-Replace-Url, HX-Reswap, HX-Retarget, "+
				"HX-Reselect, HX-Trigger, HX-Trigger-After-Settle, "+
				"HX-Trigger-After-Swap")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(200)
			return
		}

		c.Next()
	}
}
