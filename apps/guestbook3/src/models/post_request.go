package models

type PostRequest struct {
	Name    string `json:"name" form:"name"`
	Comment string `json:"comment" form:"comment" binding:"required"`
}
