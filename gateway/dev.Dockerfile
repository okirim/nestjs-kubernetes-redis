FROM node:17-alpine 

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install glob rimraf

RUN npm install --only=development

COPY . .

RUN npm run build

# FROM node:17-alpine as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install --only=production

# COPY . .

# COPY --from=development /usr/src/app/dist ./dist

# CMD ["node", "dist/main"]



################################
# FROM node:17-alpine

# ENV NODE_ENV=development

# WORKDIR /app

# #RUN apk add --no-cache tini

# COPY package*.json .

# # RUN npm install  && npm i -g @nestjs/cli  && npm cache clean --force
# RUN npm install && npm cache clean --force

# COPY . .

# #ENTRYPOINT ["/sbin/tini", "--"]

# CMD [ "npm","run","start"]