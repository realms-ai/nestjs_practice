import { Controller } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/user.entity';
import { UsersService } from './users/users.service';

describe('AppController', () => {
  let appController: AppController;
  let fakeUserService: Partial<UsersService>;
  let fakeAppService: Partial<AppService>;

  beforeEach(async () => {
    fakeUserService = {
      findOne: (id: number) => {
        return Promise.resolve({id, email: 'test@test.com', password: 'test'} as User)
      },
      find: (email: string) => {
        return Promise.resolve([{
            id: 1,
            email,
            password: 'test'
          } as User
        ])
      },
      remove: (id: number) => {
        return Promise.resolve({id, email: 'test@test.com', password: 'test'} as User)
      },
      update: (id: number, params: Partial<User>) => {
        return Promise.resolve({
            id,
            email: params.email,
            password: params.password
          } as User
        )
      }
    }

    fakeAppService = {
      signup: (email: string, password: string) => {
        return Promise.resolve({id: 1, email, password} as User)
      },
      signin: (email: string, password: string) => {
        return Promise.resolve({id: 1, email, password} as User)
      }
    }

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: fakeAppService
        },
        {
          provide: UsersService,
          useValue: fakeUserService
        }
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  it("should be defined", () => {
    expect(appController).toBeDefined();
  })

  it("Signin updates session object and return user", async () => {
    const session = { userId: -10 }
    const user = await appController.signIn({ email: 'test@test.com', password: 'test' }, session)
    expect(user.id).toEqual(1)
    expect(session.userId).toEqual(1);
  })
});
