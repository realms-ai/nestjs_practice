import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateDto } from './dtos/create.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    constructor(public messagesService: MessagesService) {
    }

    // Return all messages on link /messages
    @Get()
    index() {
        return this.messagesService.findAll();
    }

    // Create a new message on link /messages
    @Post()
    create(@Body() body: CreateDto) {
        return this.messagesService.create(body.content)
    }

    // Get a specific message on link /messages/:id
    @Get(':id')
    async show(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id)
        if (!message){
            throw new NotFoundException('Message not found')
        }
        return message
    }
}
