// x-t.github.io (c) 2023
// This work is licensed under the Creative Commons
// Attribution-NonCommercial-ShareAlike 4.0 International
// License. To view a copy of this license, visit
// http://creativecommons.org/licenses/by-nc-sa/4.0/ or
// send a letter to Creative Commons, PO Box 1866,
// Mountain View, CA 94042, USA.

package main

import (
	"log"
	"os"
	"x-t/guestbook3/src/mappings"
	"x-t/guestbook3/src/providers"
	"x-t/guestbook3/src/settings"

	"github.com/getsentry/sentry-go"
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

	providers.DBMap = providers.InitDb()
	defer providers.DBMap.Db.Close()

	mappings.CreateUrlMappings()
	mappings.CreateTemplateMappings()
	err := mappings.Router.Run(":" + os.Getenv(settings.EnvPort))
	if err != nil {
		panic(err)
	}
}
