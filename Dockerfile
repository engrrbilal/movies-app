#Development
FROM node:16.13.1-alpine AS development

ENV NODE_ENV development

WORKDIR /usr/src/app

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]

# Production 
FROM node:16.13.1-alpine AS builder

ENV NODE_ENV production

WORKDIR /usr/src/app

COPY package.json .

COPY yarn.lock .

RUN yarn install --production

COPY . .

RUN yarn build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production

ENV NODE_ENV production

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
