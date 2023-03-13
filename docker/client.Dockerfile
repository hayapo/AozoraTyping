FROM node:18-bullseye

WORKDIR /app

COPY client/ ./

RUN yarn install

EXPOSE 5173