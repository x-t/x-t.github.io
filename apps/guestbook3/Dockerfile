# x-t.github.io (c) 2023
# This work is licensed under the Creative Commons 
# Attribution-NonCommercial-ShareAlike 4.0 International 
# License. To view a copy of this license, visit 
# http://creativecommons.org/licenses/by-nc-sa/4.0/ or 
# send a letter to Creative Commons, PO Box 1866, 
# Mountain View, CA 94042, USA.

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

USER 65534

ENTRYPOINT ["/app/guestbook3"]