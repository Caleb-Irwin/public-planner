# First stage (build stage)
FROM node:12-alpine AS build

WORKDIR /app

# Copys sveltes package.jsom and package-lock.json
COPY ./package*.json ./

# Installs packages
RUN npm install

# Gets static files and svelte files
COPY ./ ./

# Sets rollups build path
ENV buildPath="./build/"

# Builds svelte
RUN npm run build


# Second Stage of build
FROM nginx:alpine

WORKDIR /app

# Copy nginx configuration
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy static files from build stage
COPY --from=build /app/build/ /www/data/

EXPOSE 80