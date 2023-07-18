package main

import (
	"log"
	"os"
	"x-t/guestbook3/src/mappings"
	"x-t/guestbook3/src/settings"
)

func main() {
	mappings.CreateUrlMappings()
	mappings.Router.LoadHTMLGlob("src/templates/*.html.tmpl")
	err := mappings.Router.Run(":" + os.Getenv(settings.EnvPort))
	if err != nil {
		log.Fatalf("unable to start server: %v", err)
	}
}
