package mappings

import (
	"html/template"
	"x-t/guestbook3/src/views/fetcher"
)

func CreateTemplateMappings() {
	Router.SetFuncMap(template.FuncMap{
		"RenderDate": fetcher.RenderDate,
		"RenderName": fetcher.RenderName,
	})
	Router.LoadHTMLGlob("src/views/**/*.html.tmpl")
}
