package models

type EmailRequest struct {
	CaptchaResponse string `json:"cf-turnstile-response" form:"cf-turnstile-response" binding:"required"`
}
