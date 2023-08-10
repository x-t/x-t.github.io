BINARY_NAME = guestbook3
BUILD_DIR = x-t/guestbook3/src

DOCKER_ARGS ?= --env-file ./.env -p 8080:8080 --rm
GOFLAGS ?= -buildmode=pie
CGO_CPPFLAGS ?= -D_FORTIFY_SOURCE=2 -fstack-protector-all

.DEFAULT_GOAL := build

build: clean
	CGO_ENABLED=1 CGO_CPPFLAGS="$(CGO_CPPFLAGS)" go build -o $(BINARY_NAME) $(GOFLAGS) $(BUILD_DIR)

docker-build: clean
	docker build -t $(BINARY_NAME) .

docker-run:
	docker run $(DOCKER_ARGS) $(BINARY_NAME)

clean:
	rm -f $(BINARY_NAME)

.PHONY: build docker-build docker-run clean