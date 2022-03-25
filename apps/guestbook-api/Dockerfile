# base node image
FROM node:16-bullseye-slim as base

# set for base and all layer that inherit from it
ENV NODE_ENV production

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl

# Install all node_modules, including dev dependencies
FROM base as deps

WORKDIR /app

ADD package.json ./
RUN npm install --production=false

# Setup production node_modules
FROM base as production-deps

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
COPY --from=deps /app/package-lock.json /app/package-lock.json
ADD package.json ./
RUN npm prune --production

# Build the app
FROM base as build

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
COPY --from=deps /app/package-lock.json /app/package-lock.json

ADD prisma .
RUN npx prisma generate

ADD . .
RUN npm run build

# Finally, build the production image with minimal footprint
FROM base

WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules
COPY --from=production-deps /app/package-lock.json /app/package-lock.json
COPY --from=build /app/node_modules/.prisma /app/node_modules/.prisma

COPY --from=build /app/dist /app/dist
ADD . .

CMD ["npm", "start"]