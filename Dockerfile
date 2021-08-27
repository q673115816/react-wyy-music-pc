FROM node:lts-alpine

WORKDIR /app
COPY . /app

RUN npm config set register "https://registry.npm.taobao.org/" \
    && npm install

EXPOSE 8080
CMD ["npm", "build"]
