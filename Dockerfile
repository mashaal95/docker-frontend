FROM node:15-alpine as builder

# copy the package.json to install dependencies
COPY ./my-app/package.json ./

# Install the dependencies and make the folder
RUN npm install && mkdir /my-app

WORKDIR /my-app

COPY ./my-app .

# Build the project and copy the files
RUN npm install
RUN npm run build


FROM nginx:alpine

#!/bin/sh

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /my-app/dist /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
