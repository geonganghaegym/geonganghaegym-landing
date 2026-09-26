FROM node:26-bookworm-slim AS builder

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
# node 26 공식 이미지부터 yarn·corepack이 번들되지 않는다.
RUN npm install -g yarn@1.22.22

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM nginxinc/nginx-unprivileged:1.31-alpine

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 8080
