import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { UsersService } from './users/users.service';

const scrypt = promisify(_scrypt)

@Injectable()
export class AppService {
  constructor(private userService: UsersService) {

  }
  getHello(): string {
    return 'Hello World!';
  }

  async signup(email: string, password: string) {
    // See if email is in use
    const users = await this.userService.find(email)
    if(users.length) {
      throw new BadRequestException("Email already taken.")
    }

    // Hash the users password
    // 1. Generate a salt
    // 2. Hash the salt and password together
    // 3. Join the hashed result and salt together
    const salt = randomBytes(8).toString('hex');
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    const encryptedPassword = salt + '.' + hash.toString('hex');

    // Create a new user and save it
    const user = await this.userService.create(email, encryptedPassword);

    // return the user
    return user;
  }

  async signin(email: string, password: string) {
    // Find the user
    const [user] = await this.userService.find(email);
    if (!user)
      throw new NotFoundException('email not found');
    
    // Checking the password of the user
    const [salt, storedHash] = user.password.split(".")
    const hash = (await scrypt(password, salt, 32)) as Buffer;
    if(storedHash !== hash.toString('hex')) 
      throw new BadRequestException('invalid credentials')
    return user;
  }
}
