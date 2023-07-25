package providers

import "time"

func RenderName(name string) string {
	if name == "" {
		return "Anonymous"
	}
	return name
}

func RenderDate(t time.Time) string {
	return t.Format("2006-01-02 15:04:05")
}
