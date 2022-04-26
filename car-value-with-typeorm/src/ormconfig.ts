
const dbConfig = {
  entities: ['**/*.entity{.ts,.js}'],
}

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'db.sqlite',
      synchronize: true,
      logging: true,
    })
    break
  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      synchronize: true,
      logging: true,
    })
    break
  case 'production':
    Object.assign(dbConfig, {
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      database: 'nest_testing',
      username: 'postgres',
      password: 'password',
    })
    break
  default: 
  Object.assign(dbConfig, {
    type: 'sqlite',
    database: 'db.sqlite',
    synchronize: true
  })
}

export {dbConfig}