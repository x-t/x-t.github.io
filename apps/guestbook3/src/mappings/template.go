package mappings

import (
	"html/template"
	"x-t/guestbook3/src/providers"
)

func CreateTemplateMappings() {
	Router.SetFuncMap(template.FuncMap{
		"RenderDate": providers.RenderDate,
		"RenderName": providers.RenderName,
	})
	Router.LoadHTMLGlob("src/templates/*.html.tmpl")
}
