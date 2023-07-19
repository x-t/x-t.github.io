package main

import (
	"log"
	"os"
	"x-t/mailguard/src/mappings"
	"x-t/mailguard/src/settings"
)

func main() {
	mappings.CreateUrlMappings()
	mappings.Router.LoadHTMLGlob("src/templates/*.html.tmpl")
	err := mappings.Router.Run(":" + os.Getenv(settings.EnvPort))
	if err != nil {
		log.Fatalf("unable to start server: %v", err)
	}
}
