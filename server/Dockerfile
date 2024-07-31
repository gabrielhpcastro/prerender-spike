FROM node:latest

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY package.json package-lock.json ./
COPY src/ ./src

RUN yarn install
EXPOSE 3000

CMD ["yarn", "start"]