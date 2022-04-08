FROM node:gallium AS builder

WORKDIR /opt/app

RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

RUN apt update
RUN apt install -y python3 build-essential

# Install build dependencies.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --no-optional --frozen-lockfile

COPY . .

# Generates the Prisma types.
RUN pnpm prisma generate

# Build into a single bundle.
RUN pnpm nx build api

# # Production layer
# FROM node:gallium AS production

# ENV PORT 3333
# WORKDIR /opt/app

# RUN curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm

# # Install production dependencies.
# COPY package.json pnpm-lock.yaml ./
# RUN pnpm install --prod --ignore-scripts --no-optional --frozen-lockfile

# COPY --from=builder /opt/app/dist/apps/api ./
# COPY --from=builder /opt/app/dist/node_modules/ ./

EXPOSE $PORT
CMD [ "node", "./dist/apps/api/main.js" ]
