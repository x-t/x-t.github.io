# x-t.github.io (c) 2023
# This work is licensed under the Creative Commons 
# Attribution-NonCommercial-ShareAlike 4.0 International 
# License. To view a copy of this license, visit 
# http://creativecommons.org/licenses/by-nc-sa/4.0/ or 
# send a letter to Creative Commons, PO Box 1866, 
# Mountain View, CA 94042, USA.

BINARY_NAME = guestbook3
BUILD_DIR = x-t/guestbook3/src

DOCKER_ARGS ?= --env-file ./.env -p 8080:8080 --rm
GOFLAGS ?= -buildmode=pie
CGO_CPPFLAGS ?= -D_FORTIFY_SOURCE=2 -fstack-protector-all

.DEFAULT_GOAL := build

build: clean
	CGO_ENABLED=1 CGO_CPPFLAGS="$(CGO_CPPFLAGS)" go build -o $(BINARY_NAME) $(GOFLAGS) $(BUILD_DIR)

run: build
	./$(BINARY_NAME)

serve:
	find "./src/" -name "*.go" | entr -r make run

docker-build: clean
	docker build -t $(BINARY_NAME) .

docker-run:
	docker run $(DOCKER_ARGS) $(BINARY_NAME)

clean:
	rm -f $(BINARY_NAME)

.PHONY: build docker-build docker-run clean