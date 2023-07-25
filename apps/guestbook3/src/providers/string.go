package providers

import (
	"regexp"
	"strings"
)

func RemoveWhitespace(field string) string {
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
