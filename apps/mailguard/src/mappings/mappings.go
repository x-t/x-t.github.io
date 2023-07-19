package mappings

import (
	"github.com/gin-gonic/gin"
	"x-t/mailguard/src/controllers"
	"x-t/mailguard/src/providers"
)

var Router *gin.Engine

func CreateUrlMappings() {
	Router = gin.Default()
	Router.Use(providers.Cors())

	Router.GET("/", controllers.Index)
	Router.GET("/_healthz", controllers.Health)
	Router.POST("/verify", controllers.Verify)
}
