
FROM node:18 AS builder


WORKDIR /app

COPY package*.json ./

RUN npm install


COPY . .

RUN npm run build-storybook


FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf


COPY nginx.conf /etc/nginx/conf.d/default.conf


COPY --from=builder /app/storybook-static /usr/share/nginx/html


EXPOSE 8083


CMD ["nginx", "-g", "daemon off;"]
