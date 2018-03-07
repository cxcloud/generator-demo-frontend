# Taken from https://github.com/avatsaev/angular4-docker-example/blob/master/Dockerfile

### STAGE 1: Build ###

# We label our stage as 'builder'
FROM node:8-alpine as builder

COPY package.json package-lock.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN ENVIRONMENT=docker npm run build
COPY scripts/replace.sh dist/config/

### STAGE 2: Setup ###

FROM nginx:1.13.9

## Copy our default nginx config
COPY scripts/nginx.conf /etc/nginx/conf.d/default.conf
COPY scripts/nginx.sh /run.sh

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /usr/share/nginx/html

CMD ["bash", "/run.sh"]
