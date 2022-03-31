FROM node:17-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

RUN apk add --no-cache tini

COPY package*.json .

RUN npm install glob rimraf

RUN npm ci  && npm cache clean --force

COPY . .

RUN npm run build

CMD ["node", "dist/main"]