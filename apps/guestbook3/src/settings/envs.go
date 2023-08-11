package settings

// EnvDatabaseConnection Connection string used to connect to MySQL
const EnvDatabaseConnection = "DSN"

// EnvCorsList List (separated by ",") of valid CORS endpoints
// by Origin, fails with 403 if request is not from one.
const EnvCorsList = "CORS_ENDPOINTS"

const EnvPort = "PORT"

const EnvTurnstileSecret = "TURNSTILE_SECRET"

const EnvEmail = "EMAIL"

const EnvPgpKey = "PGP_KEY"

const EnvAdminUsername = "ADMIN_USERNAME"

const EnvAdminSecretHash = "ADMIN_SECRET_HASH"

const EnvSentryDsn = "SENTRY_DSN"
