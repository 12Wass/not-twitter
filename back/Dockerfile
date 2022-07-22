FROM node:current-alpine3.15 AS development

RUN mkdir -p /svr/app
WORKDIR /svr/app

RUN yarn add global @nestjs/cli

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --silent --only=development

COPY . . /svr/app/
EXPOSE $NEST_PORT
CMD ["yarn", "run", "start:debug"]

# TODO : Production build below (as production)