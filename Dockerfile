# Dockerfile
FROM node:alpine

# create destination directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install dependency
RUN apk --no-cache add git

# copy the app, note .dockerignore
COPY . /usr/src/app/
RUN npm install && npm run build

EXPOSE 8080

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8080

CMD [ "npm", "start" ]
