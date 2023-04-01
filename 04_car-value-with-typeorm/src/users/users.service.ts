import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private user: Repository<User>) {

    }

    create(email: string, password: string) {
        const user = this.user.create({ email, password })
        return this.user.save(user)
    }

    find(email: string = null) {
        if(email)
            return this.user.find( { email: email } );
        else
            return this.user.find();
    }

    async findOne(id: number) {
        if(!id)
            throw new NotFoundException('user not found')
        const user = await this.user.findOne(id)
        if (!user) {
            throw new NotFoundException('user not found')
        }
        return user
    }

    async currentUser(id: number) {
        if(!id)
            return null
        const user = await this.user.findOne(id)
        return user
    }

    async update(id: number, params: Partial<User>) {
        const user = await this.user.findOne(id)
        if (!user) {
            throw new NotFoundException('user not found')
        }
        Object.assign(user, params)
        return this.user.save(user)
    }

    async remove(id: number) {
        const user = await this.user.findOne(id)
        if (!user) {
            throw new NotFoundException('user not found')
        }
        return this.user.remove(user)
    }
}
