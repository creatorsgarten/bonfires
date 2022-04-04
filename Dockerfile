FROM node:gallium AS builder

WORKDIR /opt/app

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

RUN apt update
RUN apt install -y python3 build-essential

# Install build dependencies.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --ignore-scripts --no-optional --frozen-lockfile

COPY . .

# Build into a single bundle.
RUN pnpm build:api

# ---

FROM node:gallium-alpine AS runner

ENV PORT 3333
WORKDIR /opt/app

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

# Install production dependencies.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --ignore-scripts --no-optional --frozen-lockfile

COPY --from=builder /opt/app/dist/api/ .

EXPOSE $PORT
CMD [ "node", "./dist/apps/api/main.js" ]
