# syntax=docker/dockerfile:1.4
###############################################################################
# Stage 1. Install dependencies. Uses cache mounts when building with BuildKit.
###############################################################################
FROM node:22-bullseye-slim AS deps
WORKDIR /app

# Copy package manifests first for better layer caching.
COPY package.json pnpm-lock.yaml* ./

# Install system deps (same as before)
RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates git \
  && rm -rf /var/lib/apt/lists/*

# Enable corepack (bundled with Node >=16)
RUN corepack enable

# Install dependencies with pnpm. Use BuildKit cache for store.
RUN --mount=type=cache,id=pnpm,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

###############################################################################
# Stage 2. Build the Next app
###############################################################################
FROM node:22-bullseye-slim AS builder
WORKDIR /app

# Copy node modules from deps stage to avoid reinstall
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the source
COPY . .

# Disable Next telemetry in CI.
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build. This will produce .next/standalone when output: 'standalone' is set.
RUN corepack enable && pnpm build

###############################################################################
# Stage 3. Production image. Use the standalone output produced by Next.
###############################################################################
FROM node:22-slim AS runner
WORKDIR /app

# Create a non-root user for better security
RUN groupadd -r nextjs && useradd -r -g nextjs nextjs

ENV NODE_ENV=production
ENV PORT=3000

# Copy standalone server files. The standalone folder contains server.js and node_modules needed at runtime.
# Copy static files and public folder too.
COPY --from=builder /app/.next/standalone ./ 
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# If you need to run migrations or other one-off scripts at runtime,
# add them here or use an entrypoint script.

# Change ownership and run as non-root
RUN chown -R nextjs:nextjs /app
USER nextjs

EXPOSE 3000

# Optional healthcheck. If you use this, ensure curl or wget is present in the image.
# You can implement a /api/health route in Next to keep this simple.
# HEALTHCHECK --interval=30s --timeout=3s --start-period=10s \
#   CMD curl -f http://localhost:3000/api/health || exit 1

CMD ["node", "server.js"]
