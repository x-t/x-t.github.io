package admin

func ShortenField(field string) string {
	if len(field) > 20 {
		return field[:20] + "..."
	}

	return field
}
