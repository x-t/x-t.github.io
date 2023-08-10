package mappings

import (
	"html/template"
	"x-t/guestbook3/src/views/admin"
	"x-t/guestbook3/src/views/fetcher"
)

func CreateTemplateMappings() {
	Router.SetFuncMap(template.FuncMap{
		"RenderDate":   fetcher.RenderDate,
		"RenderName":   fetcher.RenderName,
		"ShortenField": admin.ShortenField,
	})
	Router.LoadHTMLGlob("src/views/**/*.html.tmpl")
}
