# 1: Install
FROM node:16-alpine AS install

WORKDIR /usr/local/app
COPY ./ /usr/local/app/

WORKDIR /usr/local/app/core
RUN npm ci

WORKDIR /usr/local/app/components
RUN npm ci

WORKDIR /usr/local/app/storybook
RUN npm ci

# 2: Build
FROM install AS build

WORKDIR /usr/local/app/core
RUN npm run build

WORKDIR /usr/local/app/components
RUN npm run build

WORKDIR /usr/local/app/storybook
RUN npm run build

# 3: Serve
FROM nginx:1.21.4

COPY --from=build /usr/local/app/storybook/dist /usr/share/nginx/html
EXPOSE 80