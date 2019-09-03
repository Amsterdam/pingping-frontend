#FROM node:10.15 as build-deps
FROM node:10.16.2-stretch-slim as build-deps
# LABEL maintainer="datapunt@amsterdam.nl"

ARG PROD_ENV=production

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
# COPY paths.json /app/
# COPY .env* /app/
# COPY env-copy.sh /app/

# Builds are always production builds but can have differences in server environment (test/acceptance/production)
# Try to overwrite the default production file if a PROD_ENV is set as build-arg
# RUN sh env-copy.sh ${PROD_ENV}

COPY src /app/src/
#COPY dist /app/public/

ENV CI=true
ENV INLINE_RUNTIME_CHUNK=false

RUN npm install \
  --unsafe-perm \
  --verbose \
  ci \
  && npm cache clean --force

# RUN npm run build
RUN npx ng build
#RUN echo "build= `date`" > /app/build/version.txt

# Web server image
FROM nginx:stable-alpine

COPY conf/nginx-server-default.template.conf /tmp/nginx-server-default.template.conf
COPY conf/nginx.conf /etc/nginx/nginx.conf

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
  && ln -sf /dev/stderr /var/log/nginx/error.log

# Copy the built application files to the current image
COPY --from=build-deps /app/dist/ping-ping /usr/share/nginx/html

# Use LOGOUT_URL for nginx rewrite directive
CMD envsubst '${LOGOUT_URL}' < /tmp/nginx-server-default.template.conf > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'