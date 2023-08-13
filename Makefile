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