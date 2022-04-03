FROM node:17-alpine 

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm cache clean -f && npm install --only=development

COPY . .

RUN npm run build