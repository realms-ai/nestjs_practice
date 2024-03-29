
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
      database: 'db.sqlite',
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
      url: process.env.DATABASE_URL,
      migrationsRun: true,
      entities: ['**/*.entity.js'],
      ssl: {
        rejectUnauthorized: false
      }
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