FROM node:current-alpine3.15 AS development

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN apk --no-cache add --virtual .builds-deps build-base python3

RUN yarn install --silent --only=development
RUN yarn global add react-scripts@5.0.1 --silent

COPY . ./

CMD ["yarn", "start"]

# TODO : Production build below (as production)