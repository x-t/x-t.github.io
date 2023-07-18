package controllers

import (
	goaway "github.com/TwiN/go-away"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"regexp"
	"strings"
	"time"
	"x-t/guestbook3/src/models"
	"x-t/guestbook3/src/settings"
)

func Post(c *gin.Context) {
	postRequest := &models.PostRequest{}
	referer := c.Request.Referer() + settings.RedirectHTML

	if err := c.Bind(postRequest); err != nil {
		c.HTML(http.StatusBadRequest,
			"validation_errors.html.tmpl", gin.H{
				"errors": []models.ValidationError{
					{
						Parameter: "?",
						Message:   "your form could not be understood. trying to outsmart the backend, eh?",
					},
				},
			})
		return
	}

	postRequest.Name = removeWhitespace(postRequest.Name)
	postRequest.Comment = removeWhitespace(postRequest.Comment)

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

	if err := DBMap.Insert(&post); err != nil {
		log.Printf("couldn't insert post: %v", err)
		c.HTML(http.StatusInternalServerError,
			"internal_error.html.tmpl", gin.H{
				"info":     "error inserting post",
				"redirect": referer,
			})
		return
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
			"validation_errors.html.tmpl", gin.H{
				"errors":   validationErrors,
				"redirect": referer,
			})
		return true
	}
	return false
}

func isRateLimited(c *gin.Context, referer string) bool {
	var lastPost models.Post
	err := DBMap.SelectOne(&lastPost,
		"select `created_at` from post where `created_ip` = ? order by `created_at` desc limit 1",
		c.ClientIP())

	if err != nil {
		if err.Error() != "sql: no rows in result set" {
			log.Printf("couldn't get last post: %v", err)
			c.HTML(http.StatusInternalServerError,
				"internal_error.html.tmpl", gin.H{
					"info":     "error checking rate limit",
					"redirect": referer,
				})
			return true
		}
	} else {
		if since := time.Since(lastPost.CreatedAt).Minutes(); since < 30 {
			c.HTML(http.StatusBadRequest,
				"rate_limited.html.tmpl", gin.H{
					"minutes":  30 - int(since),
					"redirect": referer,
				})
			return true
		}
	}
	return false
}

func removeWhitespace(field string) string {
	re := regexp.MustCompile(`[ ]{2,}`)
	return strings.TrimSpace(
		re.ReplaceAllString(
			strings.ReplaceAll(
				strings.ReplaceAll(
					strings.ReplaceAll(
						field, "\r", " "),
					"\n", " "),
				"\t", " "),
			" "))

}
