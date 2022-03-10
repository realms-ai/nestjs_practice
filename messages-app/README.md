# Messages App

## Branch steps/2_nest_cli
This branch will help us know how to setup a project with nest cli (Generator)

## Create a new Project named **messages** with Nest CLI

1. Install a nest cli 
```
    npm install -g @nestjs/cli
```

2. Create a new Messages app with a nest cli generator
```
    nest new messages_app
```

3. App Architecture
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://i.ibb.co/nCChCDq/stack-architecture.png" width="960" alt="Nest Logo" /></a>
</p>

4. File `.eslintrc.js`
This file is used by nest to highlight errors in the code and issues regarding formatting. Some times it's annoyance as *Typescript* already catches errors for us. Sometimes it is better to disable it

5. Create modules, controllers, services and so on with nest cli
```
  nest generate module messages
  nest generate controller messages/messages --flat
```

6. Use of Decorators
  a. @Params('id') => Use to get the params like *id* in the url
  b. @Query() => Use to get the query parameters in url (GET)
  c. @Headers() => Use to get the headers paramters of request
  d. @Body() => Use to get the body parameters of request (PUT, POST)

7. Use of Pipes => to validate data and it's type in request
  a. NestJS provides us with *ValidationPipe()* to do this task. We add this to global pipe
  b. Use DTO (Date transfer object) file to handle strong parameters

8. Use of Services and Repository
  a. Services are like model self and instance functions
  b. Repository is like migration and model
  c. Don't use self depencies but use **DEPENDENCY INJECTIONS** (Focus on principle *Inversion of Control Principle*)
  d. It could become over-crowded if we use *Inversion of Control Principle* as app grows
  e. Register all classes and their dependencies in **Nest DI Container**
    - MessagesService =>(Depends on) MessagesRepository
    - MessagesRepository => `null`

9. DI Controller FLow
  - At startup, register all classes with the container
  - Container will figure out what each dependency each class has
  (Use the `Injectible` decorator on each class and add them to the modules list of providers)
  - We then ask the container to create an instance of the a class for us
  - Container creates all required dependencies and gives us the instance
  (Happens automatically - Nest will try to create controller instances for us)
  - Container will hold onto the created dependency instances and reuse them if needed




4. Default Readme

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
