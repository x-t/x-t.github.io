// x-t.github.io (c) 2023
// This work is licensed under the Creative Commons
// Attribution-NonCommercial-ShareAlike 4.0 International
// License. To view a copy of this license, visit
// http://creativecommons.org/licenses/by-nc-sa/4.0/ or
// send a letter to Creative Commons, PO Box 1866,
// Mountain View, CA 94042, USA.

package mappings

import (
	"os"
	"x-t/guestbook3/src/controllers"
	controller_admin "x-t/guestbook3/src/controllers/admin"
	"x-t/guestbook3/src/controllers/fetcher"
	"x-t/guestbook3/src/controllers/mailguard"
	"x-t/guestbook3/src/controllers/post"
	"x-t/guestbook3/src/providers"
	"x-t/guestbook3/src/settings"

	sentrygin "github.com/getsentry/sentry-go/gin"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
)

var Router *gin.Engine

var secret = []byte(os.Getenv(settings.EnvAdminSecretHash))

func CreateUrlMappings() {
	Router = gin.Default()

	Router.Use(providers.Cors())
	Router.Use(sentrygin.New(sentrygin.Options{}))

	Router.GET("/", controllers.Index)
	Router.GET("/_healthz", controllers.Healthz)
	Router.HEAD("/_healthz", controllers.Healthz)

	api := Router.Group("/api")
	{
		api.GET("/get_posts", fetcher.GetPosts)
		api.POST("/post", post.Post)
		api.POST("/email_verify", mailguard.EmailVerify)
		api.GET("/guestbook_posts", fetcher.GetPostsHyper)
	}

	authStore := cookie.NewStore(secret)
	authStore.Options(sessions.Options{MaxAge: 1800})

	admin := Router.Group("/admin")
	admin.Use(sessions.Sessions("rootsession", authStore))
	{
		admin.GET("/", controller_admin.Index)
		admin.POST("/login_req", controller_admin.Login)
	}

	adminAuthenticated := Router.Group("/admin")
	adminAuthenticated.Use(sessions.Sessions("rootsession", authStore))
	adminAuthenticated.Use(providers.AuthRequired)
	{
		adminAuthenticated.GET("/panel", controller_admin.Panel)
		adminAuthenticated.GET("/edit/:id", controller_admin.Edit)
		adminAuthenticated.POST("/update/:id", controller_admin.Update)
		adminAuthenticated.DELETE("/delete/:id", controller_admin.Delete)
		adminAuthenticated.GET("/logout", controller_admin.Logout)
	}
}
