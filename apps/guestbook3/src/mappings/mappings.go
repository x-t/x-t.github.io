package mappings

import (
	"github.com/gin-gonic/gin"
	"x-t/guestbook3/src/controllers"
	"x-t/guestbook3/src/controllers/fetcher"
	"x-t/guestbook3/src/controllers/mailguard"
	"x-t/guestbook3/src/controllers/post"
	"x-t/guestbook3/src/providers"
)

var Router *gin.Engine

func CreateUrlMappings() {
	Router = gin.Default()
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
}
