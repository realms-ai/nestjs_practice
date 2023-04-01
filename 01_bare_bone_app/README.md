# Bare Bone App

## Branch steps/1_simple_route
This branch helps us understand how to set barebone of the app from scratch

## How to run the application
```
    npx ts-node-dev src/main.ts
```
We use this command as we built the app from scratch. There are certain generators to build app with single commands

## Initialize NestJs project
```
    npm install @nestjs/common@7.6.17 @nestjs/core@7.6.17 @nestjs/platform-express@7.6.17 reflect-metadata@0.1.13 typescript@4.3.2
```

## Tools of NestJs Server
1. Pipe: Used to validate data contained in request
2. Guard: Used to authenticate user
3. Controller: User to route request to particular function
4. Service: Run some business logic and handles data access
5. Repository: Access a database
6. Modules: Groups together code
7. Filters: Handles error that occur during request handling
8. Interceptors: Adds extra logic to incoming requests or outgoing requests

Controllers and Modules are barebone of the application