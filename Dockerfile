FROM node:gallium-alpine AS builder

WORKDIR /opt/app

# Install build dependencies.
COPY package.json pnpm-lock.yaml .npmrc ./
RUN npx pnpm i

COPY . .

# Build into a single bundle.
RUN npx nx build api

# ---

FROM node:gallium-alpine AS runner

WORKDIR /opt/app

# Install production dependencies.
COPY package.json pnpm-lock.yaml .npmrc ./
RUN npx pnpm i --only production

COPY --from=builder /opt/app/dist/api/ .

RUN ls -lah

CMD [ "node", "./dist/apps/api/main.js" ]
