package fetcher

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"x-t/guestbook3/src/models"
	"x-t/guestbook3/src/providers"
)

type LegacyJSON struct {
	Posts []models.Post `json:"posts"`
}

func GetPosts(c *gin.Context) {
	var posts []models.Post

	_, err := providers.DBMap.Select(&posts,
		"select coalesce(`name`, '') `name`, `comment`, `created_at` from post")

	if err != nil {
		log.Printf("couldn't get posts: %v", err)
		c.JSON(http.StatusInternalServerError, nil)
		panic(err)
	}

	providers.ReverseArray(posts)

	c.JSON(http.StatusOK, LegacyJSON{Posts: posts})
}
