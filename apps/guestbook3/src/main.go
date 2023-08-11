package main

import (
	"github.com/getsentry/sentry-go"
	"log"
	"os"
	"x-t/guestbook3/src/mappings"
	"x-t/guestbook3/src/settings"
)

func main() {
	tracesRate := 1.0
	if os.Getenv("GIN_MODE") == "release" {
		tracesRate = 0.0
	}

	if err := sentry.Init(sentry.ClientOptions{
		Dsn:              os.Getenv(settings.EnvSentryDsn),
		EnableTracing:    true,
		TracesSampleRate: tracesRate,
	}); err != nil {
		log.Printf("Sentry initialization failed: %v", err)
	}

	mappings.CreateUrlMappings()
	mappings.CreateTemplateMappings()
	err := mappings.Router.Run(":" + os.Getenv(settings.EnvPort))
	if err != nil {
		panic(err)
	}
}
