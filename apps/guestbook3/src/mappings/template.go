// x-t.github.io (c) 2023
// This work is licensed under the Creative Commons
// Attribution-NonCommercial-ShareAlike 4.0 International
// License. To view a copy of this license, visit
// http://creativecommons.org/licenses/by-nc-sa/4.0/ or
// send a letter to Creative Commons, PO Box 1866,
// Mountain View, CA 94042, USA.

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
