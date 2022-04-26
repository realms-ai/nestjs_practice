import { BadRequestException, NotFoundException } from "@nestjs/common";
import { Test } from "@nestjs/testing"
import { NotFoundError } from "rxjs";
import { AppService } from "./app.service"
import { User } from "./users/user.entity";
import { UsersService } from "./users/users.service";

describe("AppService", () => {
  let service: AppService;
  let fakeUsersService: Partial<UsersService>;

  beforeEach(async () => {
    // Create  a fake copy of the users service
    const users = [];
    fakeUsersService = {
      find: (email: string):Promise<User[]> => {
        const filteredUsers = users.filter((user) => user.email === email)
       return  Promise.resolve(filteredUsers)
      },
      create: (email: string, password: string) => {
        const user = { id: Math.floor(Math.random() * 999999), email, password } as User
        users.push(user)
        return Promise.resolve(user)
      }
    }
    const module = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: UsersService,
          useValue: fakeUsersService
        }
      ]
    }).compile();
  
    service = module.get<AppService>(AppService);
  })
  
  it('can create an instance of auth service', async () => {
    expect(service).toBeDefined();
  })

  it("creates a new user with a salted and hashed pasword", async () => {
    const user = await service.signup('test@test.com', 'test')
    expect(user.password).not.toEqual('test')
    const [salt, hash] = user.password.split('.')
    expect(salt).toBeDefined()
    expect(hash).toBeDefined()
  })

  it("throws an error if user signs up with email that is in use", async () => {
    // fakeUsersService.find = () => 
    //   Promise.resolve([{id: 1, email: 'test@test.com', password: 'test'} as User])
    await service.signup('test@test.com', 'test')
    await expect(service.signup('test@test.com', 'test')).rejects.toThrow(
      BadRequestException
    )
  })

  it("throws an erro if signin is called with an unused email", async() => {
    await expect(service.signin('test@test.com', 'test')).rejects.toThrow(
      NotFoundException
    )
  })

  it("throws if an invalid password is provided", async () => {
    // fakeUsersService.find = () => 
    //   Promise.resolve([{id: 1, email: 'test@test.com', password: 'test'} as User])
    await service.signup('test@test.com', 'test1')    
    await expect(service.signin('test@test.com', 'test')).rejects.toThrow(
      BadRequestException 
    )
    
    await expect(service.signin('test@test.com', 'test')).rejects.toEqual(
      new BadRequestException('invalid credentials') 
    )
  })

  it("returns a user if correct password is provided", async () => {
    // ******** Use Below code to generate a hashed password ************
    await service.signup('test@test.com', 'test')
    // console.log(user)

    // fakeUsersService.find = () => 
    //   Promise.resolve([{id: 1, email: 'test@test.com', password: 'bb819ec25f7ee654.098408690e1ee6f011f58d67a35ddfaaeaff98bcbc39164dec2d4d3395723903'} as User])
    
    const user = await service.signin('test@test.com', 'test')
    expect(user).toBeDefined()
  })
})

