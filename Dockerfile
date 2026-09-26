FROM node:20-bookworm-slim AS builder

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM nginxinc/nginx-unprivileged:1.31-alpine

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 8080
