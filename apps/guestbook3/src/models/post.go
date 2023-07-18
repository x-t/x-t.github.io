package models

import (
	"time"
)

type Post struct {
	ID        int       `db:"id" json:"-"`
	Name      string    `db:"name" json:"name"`
	Comment   string    `db:"comment" json:"comment"`
	CreatedAt time.Time `db:"created_at" json:"created_at"`
	CreatedIP string    `db:"created_ip" json:"-"`
}
