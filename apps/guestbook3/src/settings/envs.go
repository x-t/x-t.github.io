package settings

// EnvDatabaseConnection Connection string used to connect to MySQL
const EnvDatabaseConnection = "DSN"

// EnvCorsList List (separated by ",") of valid CORS endpoints
// by Origin, fails with 403 if request is not from one.
const EnvCorsList = "CORS_ENDPOINTS"

const EnvPort = "PORT"
