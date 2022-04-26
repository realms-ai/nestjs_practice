import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';
import { MigrationsModule } from './migrations/migrations.module';
import { ModelsModule } from './models/models.module';
import { DtosModule } from './dtos/dtos.module';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { APP_PIPE } from '@nestjs/core';
// import cookieSession from 'cookie-session';
const cookieSession = require('cookie-session')

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'sqlite',
          database: config.get<string>('DB_NAME'),
          synchronize: true,
          entities: [User, Report],
          logging: true
        }
      }
    }),
    UsersModule, 
    ReportsModule, 
    // TypeOrmModule.forRoot({
    //   type: 'sqlite',
    //   database: 'db.sqlite',
    //   entities: [User, Report],
    //   synchronize: true
    // }), 
    MigrationsModule, 
    ModelsModule, 
    DtosModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true, // Strong Parameters listing to allow defined parameters in a request
        transform: true
      })
    }
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(
      cookieSession({
        keys: ['cookieKeys'], // Go for strong keys to encrypt cookies data
      })
    )
    .forRoutes('*')
  }
}
