FROM golang:1.20-bullseye as build

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download && go mod verify

ADD . .

RUN make build

# We don't need Go sources.
RUN find ./src/views -name "*.go" | xargs rm

FROM gcr.io/distroless/base-debian11

WORKDIR /app

COPY --from=build /app/guestbook3 /app/guestbook3
COPY --from=build /app/src/views /app/src/views

ENTRYPOINT ["/app/guestbook3"]