BINARY_NAME = guestbook3
BUILD_DIR = x-t/guestbook3/src

DOCKER_ARGS ?= --env-file ./.env -p 8080:8080 --rm

.DEFAULT_GOAL := build

build: clean
	CGO_ENABLED=1 go build -o $(BINARY_NAME) $(BUILD_DIR)

docker-build: clean
	docker build -t $(BINARY_NAME) .

docker-run:
	docker run $(DOCKER_ARGS) $(BINARY_NAME)

clean:
	rm -f $(BINARY_NAME)

.PHONY: build docker-build docker-run clean