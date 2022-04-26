import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UseInterceptors } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serializer.interceptor';
import { UserUpdateDto } from './dtos/update.dto';
import { UserDto } from './dtos/user.dto';
import { UsersService } from './users.service';

@Controller('users')
// Controller wide serialization
// @Serialize(UserDto)
export class UsersController {
    constructor(private usersService: UsersService){}

    // /users => Get all users or filter them
    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    index(@Query('email') email: string) {
        return this.usersService.find(email)
    }

    // /users/:id => Get a single user
    // @UseInterceptors(new SerializerInterceptor(UserDto))
    // Wrapping the interceptor in custom decorator
    // @Serialize(UserDto)
    @Get(':id')
    show(@Param('id', ParseIntPipe) id: number) {
        console.log("Handler is running")
        return this.usersService.findOne(id)
    }

    // /users => Create a new user
    @Post()
    create() {

    }

    // /users/:id => Update a specific user
    @UseInterceptors(ClassSerializerInterceptor)
    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() body: UserUpdateDto) {
        return this.usersService.update(id, body)
    }

    // /users/:id => Delete a specific user
    @UseInterceptors(ClassSerializerInterceptor)
    @Delete(':id')
    destroy(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.remove(id)
    }
}
