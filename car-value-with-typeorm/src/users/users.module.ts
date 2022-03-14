import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrentUser } from './decorators/current-user.decorator';
import { UserCreateDto } from './dtos/create.dto';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UserCreateDto, {
    provide: APP_INTERCEPTOR,
    useClass: CurrentUserInterceptor
  }],
  exports: [UserCreateDto, 
    UsersService
  ]
})
export class UsersModule {}
