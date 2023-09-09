// x-t.github.io (c) 2023
// This work is licensed under the Creative Commons
// Attribution-NonCommercial-ShareAlike 4.0 International
// License. To view a copy of this license, visit
// http://creativecommons.org/licenses/by-nc-sa/4.0/ or
// send a letter to Creative Commons, PO Box 1866,
// Mountain View, CA 94042, USA.

package providers

import (
	"database/sql"
	"github.com/go-gorp/gorp"
	_ "github.com/lib/pq"
	"os"
	"x-t/guestbook3/src/models"
	"x-t/guestbook3/src/settings"
)

var DBMap = initDb()

func initDb() *gorp.DbMap {
	connectionString := os.Getenv(settings.EnvDatabaseConnection)

	db, err := sql.Open("postgres", connectionString)
	if err != nil {
		panic(err)
	}
	dbMap := &gorp.DbMap{Db: db, Dialect: gorp.PostgresDialect{}}
	dbMap.AddTableWithName(models.Post{}, "post").SetKeys(true, "id")
	dbMap.CreateTablesIfNotExists()

	return dbMap
}
