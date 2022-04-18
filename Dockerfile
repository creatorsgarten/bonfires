FROM node:gallium-alpine AS builder

WORKDIR /opt/app

RUN apk add --update --no-cache curl python3 make g++ \
	&& curl -fsSL 'https://github.com/pnpm/pnpm/releases/download/v6.16.1/pnpm-linuxstatic-x64' -o /bin/pnpm \
	&& chmod +x /bin/pnpm

# Install build dependencies.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --no-optional --frozen-lockfile

# Copy the sources.
COPY . .

# Generate the Prisma types.
RUN pnpm prisma generate

# Build into a single bundle.
RUN pnpm nx build api --no-cache

# -------------------------------

# Production layer
FROM node:gallium-alpine AS production

WORKDIR /opt/app

RUN apk add --update --no-cache curl python3 make g++ \
	&& curl -fsSL 'https://github.com/pnpm/pnpm/releases/download/v6.16.1/pnpm-linuxstatic-x64' -o /bin/pnpm \
	&& chmod +x /bin/pnpm

WORKDIR /opt/app

ENV HOST "0.0.0.0"
ENV PORT 3333

ENV PRISMA_VERSION "3.12.0"
ENV PRISMA_MODULE "/opt/app/node_modules/.pnpm/@prisma+client@${PRISMA_VERSION}_prisma@${PRISMA_VERSION}/node_modules/.prisma/client"

# Copy the built bundle.
COPY --from=builder /opt/app/dist/apps/api ./

# Install production dependencies according to the generated package.json
RUN pnpm install --prod --no-optional

# Add runtime dependencies that are not detected by Nx
RUN pnpm add tslib

# Copy the generated prisma modules
COPY --from=builder "$PRISMA_MODULE" "$PRISMA_MODULE"
RUN echo "$PRISMA_MODULE"

# Purge dependencies from the final image.
RUN apk del python3 make g++

# Expose the API
EXPOSE $PORT

# Start the main API bundle
CMD [ "node", "./main.js" ]
