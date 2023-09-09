// x-t.github.io (c) 2023
// This work is licensed under the Creative Commons
// Attribution-NonCommercial-ShareAlike 4.0 International
// License. To view a copy of this license, visit
// http://creativecommons.org/licenses/by-nc-sa/4.0/ or
// send a letter to Creative Commons, PO Box 1866,
// Mountain View, CA 94042, USA.

package settings

// EnvDatabaseConnection Connection string used to connect to MySQL
const EnvDatabaseConnection = "DATABASE_URL"

// EnvCorsList List (separated by ",") of valid CORS endpoints
// by Origin, fails with 403 if request is not from one.
const EnvCorsList = "CORS_ENDPOINTS"

// EnvPort Where gin listens
const EnvPort = "PORT"

// EnvTurnstileSecret https://www.cloudflare.com/en-gb/products/turnstile/
const EnvTurnstileSecret = "TURNSTILE_SECRET"

// EnvEmail Email displayed on /api/email_verify
// (src/views/mailguard/captcha_response.html.tmpl)
const EnvEmail = "EMAIL"

// EnvPgpKey PGP key displayed on /api/email_verify
// (src/views/mailguard/captcha_response.html.tmpl)
const EnvPgpKey = "PGP_KEY"

// EnvAdminUsername Username for admin interface on /admin/
const EnvAdminUsername = "ADMIN_USERNAME"

// EnvAdminSecretHash bcrypt (https://pkg.go.dev/golang.org/x/crypto/bcrypt)
// hash of the password used for the admin interface.
// Must be generated manually:
/*
func main() {
	password := []byte(os.Getenv("PASSWORD"))
	hashedPassword, err := bcrypt.GenerateFromPassword(password, bcrypt.DefaultCost)
	if err != nil {
		panic(err)
	}
	fmt.Println(string(hashedPassword))
}
*/
// Printed result should be put into the environment variable.
const EnvAdminSecretHash = "ADMIN_SECRET_HASH"

// EnvSentryDsn Sentry DSN for error reporting
// (https://docs.sentry.io/platforms/go/guides/gin/)
const EnvSentryDsn = "SENTRY_DSN"
