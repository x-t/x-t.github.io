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

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
)

var Router *gin.Engine

var secret = []byte(os.Getenv(settings.EnvAdminSecretHash))

func CreateUrlMappings() {
	Router = gin.Default()

	Router.Use(gin.Recovery())
	Router.Use(providers.Cors())

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
		admin.GET("/about", controller_admin.About)
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
		adminAuthenticated.GET("/server", controller_admin.Server)
	}
}
