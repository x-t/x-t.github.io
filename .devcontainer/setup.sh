#!/usr/bin/env bash

set -ex

sudo corepack enable
docker run --name guestbook -e POSTGRES_PASSWORD=password -e POSTGRES_DB=guestbook -d -p 5432:5432 postgres
pnpm install
printf 'su postgres\npsql -d guestbook\nCREATE EXTENSION IF NOT EXISTS "uuid-ossp";\n' | docker exec -i guestbook /bin/bash
export DATABASE_URL="postgres://postgres:password@localhost:5432/guestbook"
pnpm run prisma:push --filter guestbook-api
pnpm run prisma:seed --filter guestbook-api
echo $DOPPLER_SERVICE_TOKEN | doppler configure set token --scope /
