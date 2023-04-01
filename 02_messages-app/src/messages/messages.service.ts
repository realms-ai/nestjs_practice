import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

// We use BETTER not BEST as some limitations are there in TypeScript
@Injectable()
export class MessagesService {
    constructor(public messagesRepo: MessagesRepository) {
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content)
    }
}

// ************* Bad way ******************
/*
export class MessagesService {
    // class variables
    messagesRepo: MessageRepository

    constructor() {
        // Servive is creating its own dependencies (Creating it's own copy of Message Repository)
        // Don't do this on real apps
        // Later will do deep dive of Dependency Injections (Better to export existing copy)

        this.messagesRepo = new MessageRepository();
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content)
    }
}
*/

// ********** Better way with DEPENDENCY INJECTION ***************
/*
export class MessagesService {
    // class variables
    messagesRepo: MessageRepository
    
    // (Better to export existing copy as it's receives it's dependency and don't create it)
    // Problem comes in Automated Testing when we wants classes to don't write to hard disk
    constructor(repo: MessageRepository) {
        this.messagesRepo = repo;
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content)
    }
}*/

// ********* Best way of DEPENDENCY INJECTION ***************
/*
interface Repository {
    findOne(id: string);
    findAll();
    create(content: string)
}

export class MessagesService {
    messagesRepo: Repository;
    
    constructor(repo: Repository) {
        this.messagesRepo = repo
    }
}*/