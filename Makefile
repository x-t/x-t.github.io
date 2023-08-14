# x-t.github.io (c) 2023
# This work is licensed under the Creative Commons 
# Attribution-NonCommercial-ShareAlike 4.0 International 
# License. To view a copy of this license, visit 
# http://creativecommons.org/licenses/by-nc-sa/4.0/ or 
# send a letter to Creative Commons, PO Box 1866, 
# Mountain View, CA 94042, USA.

PORT_WEB ?= 3000
PORT_GUESTBOOK ?= 8080

.DEFAULT_GOAL := serve

serve:
	make -j2 serve-guestbook serve-web

serve-web:
	cd apps/web && PORT=$(PORT_WEB) make serve

serve-guestbook:
	cd apps/guestbook3 && PORT=$(PORT_GUESTBOOK) make serve

.PHONY: serve serve-web serve-guestbook