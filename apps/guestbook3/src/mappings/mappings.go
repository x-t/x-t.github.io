package mappings

import (
	"github.com/gin-gonic/gin"
	"x-t/guestbook3/src/controllers"
)

var Router *gin.Engine

func CreateUrlMappings() {
	Router = gin.Default()
	Router.Use(controllers.Cors())

	Router.GET("/", controllers.Index)
	Router.GET("/_healthz", controllers.Healthz)

	api := Router.Group("/api")
	{
		api.GET("/get_posts", controllers.GetPosts)
		api.POST("/post", controllers.Post)
	}
}
