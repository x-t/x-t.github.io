// x-t.github.io (c) 2023
// This work is licensed under the Creative Commons
// Attribution-NonCommercial-ShareAlike 4.0 International
// License. To view a copy of this license, visit
// http://creativecommons.org/licenses/by-nc-sa/4.0/ or
// send a letter to Creative Commons, PO Box 1866,
// Mountain View, CA 94042, USA.

package post

import (
	"fmt"
	"log"
	"net/http"
	"time"
	"x-t/guestbook3/src/models"
	"x-t/guestbook3/src/providers"
	"x-t/guestbook3/src/settings"

	goaway "github.com/TwiN/go-away"
	"github.com/gin-gonic/gin"
)

func Post(c *gin.Context) {
	postRequest := &models.PostRequest{}

	baseReferer, err := providers.RemovePathSegments(c.Request.Referer())
	if err != nil {
		fmt.Println("Error:", err)
		panic(err)
	}

	referer := baseReferer + settings.RedirectHTML

	if err := c.Bind(postRequest); err != nil {
		c.HTML(http.StatusBadRequest,
			"post/validation_errors.html", gin.H{
				"errors": []models.ValidationError{
					{
						Parameter: "?",
						Message:   "your form could not be understood. trying to outsmart the backend, eh?",
					},
				},
			})
		return
	}

	postRequest.Name = providers.RemoveWhitespace(postRequest.Name)
	postRequest.Comment = providers.RemoveWhitespace(postRequest.Comment)

	if isPostValid(c, postRequest, referer) {
		return
	}

	if isRateLimited(c, referer) {
		return
	}

	post := models.Post{
		Name:      postRequest.Name,
		Comment:   postRequest.Comment,
		CreatedAt: time.Now(),
		CreatedIP: c.ClientIP(),
	}

	if err := providers.DBMap.Insert(&post); err != nil {
		log.Printf("couldn't insert post: %v", err)
		c.HTML(http.StatusInternalServerError,
			"post/internal_error.html", gin.H{
				"info":     "error inserting post",
				"redirect": referer,
			})
		panic(err)
	}

	c.Redirect(http.StatusFound, referer)
}

func isPostValid(c *gin.Context, postRequest *models.PostRequest, referer string) bool {
	var validationErrors []models.ValidationError

	if postRequest.Comment == "" {
		validationErrors = append(validationErrors, models.ValidationError{
			Parameter: "comment",
			Message:   "you submitted an empty comment",
		})
	}

	if len(postRequest.Comment) > 128 {
		validationErrors = append(validationErrors, models.ValidationError{
			Parameter: "comment",
			Message:   "your comment is too long",
		})
	}

	if len(postRequest.Name) > 32 {
		validationErrors = append(validationErrors, models.ValidationError{
			Parameter: "name",
			Message:   "your name is too long",
		})
	}

	if goaway.IsProfane(postRequest.Name) {
		validationErrors = append(validationErrors, models.ValidationError{
			Parameter: "name",
			Message:   "profanity: " + goaway.Censor(postRequest.Name),
		})
	}

	if goaway.IsProfane(postRequest.Comment) {
		validationErrors = append(validationErrors, models.ValidationError{
			Parameter: "comment",
			Message:   "profanity: " + goaway.Censor(postRequest.Comment),
		})
	}

	if len(validationErrors) > 0 {
		c.HTML(http.StatusBadRequest,
			"post/validation_errors.html", gin.H{
				"errors":   validationErrors,
				"redirect": referer,
			})
		return true
	}
	return false
}

func isRateLimited(c *gin.Context, referer string) bool {
	var lastPost models.Post
	err := providers.DBMap.SelectOne(&lastPost,
		"select created_at from post where created_ip = $1 order by created_at desc limit 1",
		c.ClientIP())

	if err != nil {
		if err.Error() != "sql: no rows in result set" {
			log.Printf("couldn't get last post: %v", err)
			c.HTML(http.StatusInternalServerError,
				"post/internal_error.html", gin.H{
					"info":     "error checking rate limit",
					"redirect": referer,
				})
			panic(err)
		}
	} else {
		if since := time.Since(lastPost.CreatedAt).Minutes(); since < 30 {
			c.HTML(http.StatusBadRequest,
				"post/rate_limited.html", gin.H{
					"minutes":  30 - int(since),
					"redirect": referer,
				})
			return true
		}
	}
	return false
}
