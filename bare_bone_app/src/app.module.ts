import { Module } from "@nestjs/common";
import { AppController, NewController } from "./app.controller";

// Module helps to create instance of classes defined e.g. Controllers, Services and so on
@Module({
    controllers: [AppController, NewController]
})
export class AppModule {

}