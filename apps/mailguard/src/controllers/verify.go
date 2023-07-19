package controllers

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"io"
	"log"
	"net/http"
	"net/url"
	"os"
	"strconv"
	"strings"
	"x-t/mailguard/src/models"
	"x-t/mailguard/src/settings"
)

func Verify(c *gin.Context) {
	var request models.EmailRequest
	err := c.BindJSON(&request)
	if err != nil {
		log.Printf("unable to bind json: %v", err)
		c.String(http.StatusBadRequest, "invalid request")
		return
	}

	success, err := verifyCaptcha(request.CaptchaResponse)
	if err != nil || !success {
		c.String(http.StatusForbidden, "captcha verification failed")
		return
	}

	c.HTML(http.StatusOK, "response.html.tmpl", gin.H{
		"mail":     os.Getenv(settings.EnvEmail),
		"keyblock": strings.ReplaceAll(os.Getenv(settings.EnvPgpKey), "\\n", "\n"),
	})
}

func verifyCaptcha(captcha string) (bool, error) {
	apiUrl := "https://hcaptcha.com"
	resource := "/siteverify"
	data := url.Values{}
	data.Set("response", captcha)
	data.Set("secret", os.Getenv(settings.EnvHcaptchaSecret))

	u, err := url.ParseRequestURI(apiUrl)
	if err != nil {
		return false, err
	}

	u.Path = resource
	urlStr := u.String()

	client := &http.Client{}
	r, err := http.NewRequest(http.MethodPost, urlStr, strings.NewReader(data.Encode()))
	if err != nil {
		return false, err
	}
	r.Header.Add("Content-Type", "application/x-www-form-urlencoded")
	r.Header.Add("Content-Length", strconv.Itoa(len(data.Encode())))

	resp, err := client.Do(r)
	if err != nil {
		return false, err
	}

	_crs, err := io.ReadAll(resp.Body)
	if err != nil {
		return false, err
	}

	crs, err := UnmarshalCAPTCHAResponse(_crs)
	if err != nil {
		return false, err
	}

	if !crs.Success {
		return false, fmt.Errorf("%v", crs.ErrorCodes)
	}

	return true, nil
}

func UnmarshalCAPTCHAResponse(data []byte) (CAPTCHAResponse, error) {
	var r CAPTCHAResponse
	err := json.Unmarshal(data, &r)
	return r, err
}

func (r *CAPTCHAResponse) Marshal() ([]byte, error) {
	return json.Marshal(r)
}

type CAPTCHAResponse struct {
	Success     bool     `json:"success"`
	ChallengeTs string   `json:"challenge_ts"`
	Hostname    *string  `json:"hostname,omitempty"`
	Credit      *bool    `json:"credit,omitempty"`
	ErrorCodes  []string `json:"error-codes,omitempty"`
}
