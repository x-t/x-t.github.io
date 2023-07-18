#!/usr/bin/env bash

set -ex

sudo corepack enable
pnpm install
echo $DOPPLER_SERVICE_TOKEN | doppler configure set token --scope /
