FROM golang:1.20-bullseye as build

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download && go mod verify

ADD . .

RUN CGO_ENABLED=1 go build -v -o /app/mailguard x-t/mailguard/src

FROM gcr.io/distroless/base-debian11

WORKDIR /app

COPY --from=build /app/mailguard /app/mailguard
ADD ./src/templates /app/src/templates

ENTRYPOINT ["/app/mailguard"]