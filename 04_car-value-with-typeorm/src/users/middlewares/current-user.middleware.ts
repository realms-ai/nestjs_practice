import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { User } from "../user.entity";
import { UsersService } from "../users.service";

declare global {
  namespace Express {
    interface Request {
      currentUser?: User;
      session?: any;
    }
  }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
  constructor(
    private usersService: UsersService
  ){}

  async use(req: Request, res: Response, next: NextFunction) {
    //  @ts-ignore
    const { userId } = req.session || {}

    if(userId){
      const user = await this.usersService.currentUser(userId)
      //  @ts-ignore
      req.currentUser = user
    }

    next()
  }
}