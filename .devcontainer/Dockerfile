# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.233.0/containers/ubuntu/.devcontainer/base.Dockerfile

# [Choice] Ubuntu version (use ubuntu-22.04 or ubuntu-18.04 on local arm64/Apple Silicon): ubuntu-22.04, ubuntu-20.04, ubuntu-18.04
ARG VARIANT="jammy"
FROM mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}

RUN curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
    apt-transport-https ca-certificates curl gnupg libvips nodejs tmux

RUN curl -sLf --retry 3 --tlsv1.2 --proto \
    "=https" 'https://packages.doppler.com/public/cli/gpg.DE2A7741A397C129.key' \
    | sudo apt-key add -

RUN echo "deb https://packages.doppler.com/public/cli/deb/debian any-version main" \
    | sudo tee /etc/apt/sources.list.d/doppler-cli.list

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends doppler
