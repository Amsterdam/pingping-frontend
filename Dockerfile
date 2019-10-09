FROM node:10.16.2-stretch-slim as build-deps
LABEL maintainer="datapunt@amsterdam.nl"

ARG ENVIRONMENT

WORKDIR /app

RUN apt-get update && \
  apt-get install -y \
  netcat \
  git && \
  rm -rf /var/lib/apt/lists/*

COPY package.json /app/
COPY package-lock.json /app/
COPY tsconfig.json /app/
COPY tsconfig.app.json /app/
COPY tsconfig.spec.json /app/
COPY tslint.json /app/
COPY angular.json /app/

COPY src /app/src/

ENV CI=true
ENV INLINE_RUNTIME_CHUNK=false

RUN npm install \
  --unsafe-perm \
  --verbose \
  ci \
  && npm cache clean --force

RUN npx ng build --c $ENVIRONMENT

# Web server image
FROM nginx:stable-alpine

COPY conf/nginx.conf /etc/nginx/nginx.conf
COPY conf/nginx-server-default.template.conf /etc/nginx/conf.d/default.conf

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
  && ln -sf /dev/stderr /var/log/nginx/error.log

# Copy the built application files to the current image
COPY --from=build-deps /app/dist/ping-ping /usr/share/nginx/html