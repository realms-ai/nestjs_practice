# Car Value App with TypeORM

## Branch steps/3_nest_architecture
This branch will help us know how to architect the nest app with typeorm

1. Use of App Controller to handle Sessions

2. Use of nest cli to generate modules and services
```
  nest g module users
  nest g controller users
  nest g service users
  nest g module reports
  nest g controller reports
  nest g service reports
```

3. Create Repository files 
  - As Entity (Acts as migrations)
  - As Repository (Acts as models)

4. TypeORM Hooks
  - Works on save() and remove()
  - By-pass on insert(), update() and delete()

5. TypeORM Service methods
  - create
  - findOne
  - find
  - update
  - remove

6. Custom Data Serialization
  - Used to modify response with the help of DTO (Data Transfer Object)
  - Serializer Interceptor helps us in achieving serialization
  - They act as a middleware and helps applications use it

7. Authentication with cookies
  - Use of cookies for authentication puposes
  - Use of decorator (interact with interceptor to get work done) and interceptor (Works as part of app dependency injector)

8. Managing configurations
  - Running below dependencies for configuration
  ```
    yarn add @nestjs/config
    yarn add cross-env
  ```
