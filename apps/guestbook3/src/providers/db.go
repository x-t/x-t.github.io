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
	"log"
	"os"
	"x-t/guestbook3/src/models"
	"x-t/guestbook3/src/settings"

	"github.com/go-gorp/gorp"
	_ "github.com/jackc/pgx/v4/stdlib"
)

var DBMap *gorp.DbMap

func InitDb() *gorp.DbMap {
	connectionString := os.Getenv(settings.EnvDatabaseConnection)

	db, err := sql.Open("pgx", connectionString)
	if err != nil {
		panic(err)
	}

    if err = db.Ping(); err != nil {
        log.Fatal("DB unreachable:", err)
        panic(err)
    }

	dbMap := &gorp.DbMap{Db: db, Dialect: gorp.PostgresDialect{}}
	dbMap.AddTableWithName(models.Post{}, "post").SetKeys(true, "id")
	err = dbMap.CreateTablesIfNotExists()
	if err != nil {
		panic(err)
	}

	return dbMap
}
