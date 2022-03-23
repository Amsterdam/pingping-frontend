FROM node:12

# Create app directory
WORKDIR /app
ADD . /app/

RUN yarn config set "strict-ssl" false -g
RUN yarn install
RUN yarn build

ENV HOST 0.0.0.0
EXPOSE 80

# start command
CMD [ "yarn", "start" ]
