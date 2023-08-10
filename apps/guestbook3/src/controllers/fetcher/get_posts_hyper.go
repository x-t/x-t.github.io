package fetcher

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"x-t/guestbook3/src/models"
	"x-t/guestbook3/src/providers"
)

func GetPostsHyper(c *gin.Context) {
	var posts []models.Post

	_, err := providers.DBMap.Select(&posts,
		"select coalesce(`name`, '') `name`, `comment`, `created_at` from post")

	if err != nil {
		log.Printf("couldn't get posts: %v", err)
		c.HTML(http.StatusInternalServerError,
			"fetcher/hyper_error.html", gin.H{
				"error": "error getting posts",
			})
		return
	}

	providers.ReverseArray(posts)

	c.HTML(http.StatusOK, "fetcher/posts.html", gin.H{
		"posts": posts,
	})
}
