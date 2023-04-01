import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { NotFoundError } from 'rxjs';

describe('UsersController', () => {
  let controller: UsersController;
  let fakeUserService: Partial<UsersService>;

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

    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: fakeUserService
        }
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it("index returns a list of users with the given email", async () => {
    const users = await controller.index('test@test.com')
    expect(users.length).toEqual(1);
    expect(users[0].email).toEqual('test@test.com')
  })

  it("show returns a single user with a given ID", async () => {
    const user = await controller.show(1)
    expect(user).toBeDefined();
  })

  // Not required this test in controlller as we are testing this in service
  // it("show function throws an error if user does not exist", async () => {
  //   fakeUserService.findOne = (id: number) => null
  //   await expect(controller.show(1)).rejects.toThrow(
  //     NotFoundError
  //   )
  // })
});
