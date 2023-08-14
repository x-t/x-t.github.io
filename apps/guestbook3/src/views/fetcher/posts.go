// x-t.github.io (c) 2023
// This work is licensed under the Creative Commons
// Attribution-NonCommercial-ShareAlike 4.0 International
// License. To view a copy of this license, visit
// http://creativecommons.org/licenses/by-nc-sa/4.0/ or
// send a letter to Creative Commons, PO Box 1866,
// Mountain View, CA 94042, USA.

package fetcher

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
