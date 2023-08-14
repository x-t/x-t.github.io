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
	_ "github.com/go-sql-driver/mysql"
	"os"
	"strings"
	"x-t/guestbook3/src/models"
	"x-t/guestbook3/src/settings"
)

var DBMap = initDb()

func initDb() *gorp.DbMap {
	connectionString := os.Getenv(settings.EnvDatabaseConnection)

	if !strings.Contains(connectionString, "parseTime=true") {
		if !strings.Contains(connectionString, "?") {
			connectionString += "?parseTime=true"
		} else {
			connectionString += "&parseTime=true"
		}
	}

	db, err := sql.Open("mysql", connectionString)
	if err != nil {
		panic(err)
	}
	dbMap := &gorp.DbMap{Db: db, Dialect: gorp.MySQLDialect{Engine: "InnoDB", Encoding: "UTF8"}}
	dbMap.AddTableWithName(models.Post{}, "post").SetKeys(true, "id")

	return dbMap
}
