import { Body, Controller, Get, Param, Post, Request, Session, UseGuards, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './guards/auth.guard';
import { Serialize } from './interceptors/serializer.interceptor';
import { CurrentUser } from './users/decorators/current-user.decorator';
import { UserCreateDto } from './users/dtos/create.dto';
import { UserDto } from './users/dtos/user.dto';
import { CurrentUserInterceptor } from './users/interceptors/current-user.interceptor';
import { User } from './users/user.entity';
import { UsersService } from './users/users.service';

// Use this controller to handle SESSIONS
@Serialize(UserDto)
@Controller()
@UseInterceptors(CurrentUserInterceptor)
export class AppController {
  constructor(private readonly appService: AppService, private usersService: UsersService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('signup')
  async signUp(@Body() body: UserCreateDto, @Session() session: any) {
    console.log(body);
    const user = await this.appService.signup(body.email, body.password);
    session.userId = user.id
    return user;
  }

  @Post('signin')
  async signIn(@Body() body: UserCreateDto, @Session() session: any) {
    const user = await this.appService.signin(body.email, body.password)
    session.userId = user.id;
    return user;
  }

  @Get('signout')
  async signout(@Session() session: any) {
    session.userId = null
    return 'User successfully signed out'
  }

  // @Get('whoamI')
  // async whoAmI(@Session() session: any) {
  //   return this.usersService.findOne(session.userId)
  // }

  // Using Custom Decorator and Interceptor to do the things
  @Get('whoamI')
  @UseGuards(AuthGuard)
  async whoAmI(@CurrentUser() user: User) {
    return user;
  }

  // OR just via Interceptor
  @Get('whoAmIHere')
  async whoAmIHere(@Request() request: Request) {
    const user = request
    console.log("I am in request who am I here")
    return user
  }

  @Get('colors/:color')
  getColor(@Param('color') color: string, @Session() session: any) {
    session.color = color;
  }

  @Get('colors')
  getColors(@Session() session: any) {
    return session.color
    
  }

  @Post('loginWithOTP')
  logInWithOtp() {

  }

  @Post('forgotPassword')
  forgotPassword() {

  }

  @Post('resetPassword')
  resetPassword() {

  }
}
