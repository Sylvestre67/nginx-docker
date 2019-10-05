FROM node:10 as build-stage

WORKDIR /app

COPY package.json /app/
COPY yarn.lock /app/

RUN yarn install

COPY ./ /app/

RUN yarn build

FROM nginx:alpine

COPY --from=build-stage ./app/build/ /var/www
COPY --from=build-stage ./app/nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]