package controllers

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"x-t/guestbook3/src/models"
)

type LegacyJSON struct {
	Posts []models.Post `json:"posts"`
}

func GetPosts(c *gin.Context) {
	var posts []models.Post

	_, err := DBMap.Select(&posts,
		"select coalesce(`name`, '') `name`, `comment`, `created_at` from post")

	if err != nil {
		log.Printf("couldn't get posts: %v", err)
		c.JSON(http.StatusInternalServerError, nil)
		return
	}

	for i, j := 0, len(posts)-1; i < j; i, j = i+1, j-1 {
		posts[i], posts[j] = posts[j], posts[i]
	}

	c.JSON(http.StatusOK, LegacyJSON{Posts: posts})
}
