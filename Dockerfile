FROM node:12.10.0-alpine as client

RUN mkdir /opt/natMusic

WORKDIR /opt/natMusic

COPY ./package.json .

RUN npm install --production --registry=https://registry.npm.taobao.org

COPY . .

RUN npm run build

FROM nginx

WORKDIR /usr/app/

COPY --from=client /opt/natMusic/build/ /usr/share/nginx/html/