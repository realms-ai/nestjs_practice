
let dbConfig = {
  synchronize: false,
  migrations: ['migration/*.js'],
  cli: {
    migrationsDir: 'migration',
  },
}

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'db1.sqlite',
      synchronize: false,
      entities: ['**/*.entity.js'],
      logging: true,
    })
    break
  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      synchronize: false,
      logging: true,
      entities: ['**/*.entity.ts'],
      migrationsRun: true
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

module.exports = dbConfig