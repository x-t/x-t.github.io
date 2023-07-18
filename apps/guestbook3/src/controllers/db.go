package controllers

import (
	"database/sql"
	"github.com/go-gorp/gorp"
	_ "github.com/go-sql-driver/mysql"
	"log"
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
		log.Fatalf("couldn't open database: %v", err)
	}
	dbMap := &gorp.DbMap{Db: db, Dialect: gorp.MySQLDialect{Engine: "InnoDB", Encoding: "UTF8"}}
	dbMap.AddTableWithName(models.Post{}, "post").SetKeys(true, "id")

	return dbMap
}
