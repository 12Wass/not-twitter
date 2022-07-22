FROM node:current-alpine3.15 AS development

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent
RUN yarn global add react-scripts@5.0.1 --silent

COPY . ./

CMD ["yarn", "start"]

# TODO : Production build below (as production)