// x-t.github.io (c) 2023
// This work is licensed under the Creative Commons
// Attribution-NonCommercial-ShareAlike 4.0 International
// License. To view a copy of this license, visit
// http://creativecommons.org/licenses/by-nc-sa/4.0/ or
// send a letter to Creative Commons, PO Box 1866,
// Mountain View, CA 94042, USA.

package providers

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"os"
	"strconv"
	"strings"
	"x-t/guestbook3/src/settings"
)

func VerifyCaptcha(captcha string) (bool, error) {
	apiUrl := "https://challenges.cloudflare.com"
	resource := "/turnstile/v0/siteverify"
	data := url.Values{}
	data.Set("response", captcha)
	data.Set("secret", os.Getenv(settings.EnvTurnstileSecret))

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
