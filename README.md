# NestJS + MongoDB + GraphQL + Apollo

## Udemy: https://www.udemy.com/course/nestjs-zero-to-hero/

## Installation

```bash
$ npm install or yarn
```


## Required:

- Docker

```bash
# MongoDB
$ docker run --name mongo -p 27017:27017 -d mongo
```

## Running the app

- Rename .env.example to .env and fill in the values

```bash
# development
$ npm run start or yarn start

# watch mode
$ npm run start:dev or yarn start:dev

# production mode
$ npm run start:prod or yarn start:prod
```

## Test

```bash
# unit tests
$ npm run test or yarn test

# e2e tests
$ npm run test:e2e or yarn test:e2e

# test coverage
$ npm run test:cov or yarn test:cov
```

