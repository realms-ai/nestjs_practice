import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

// Decorator: telling nestjs that this is a main controller inside application
// It will handle routes and incoming requests
@Controller()
class AppController {
    // Adding Configurations here

    // 1. Setting Route function to route requests
    @Get()
    getRootRoute() {
        return 'Hi There!';
    }

}

// Module helps to create instance of classes defined e.g. Controllers, Services and so on
@Module({
    controllers: [AppController]
})
class AppModule {

}

// Add function which run when we start our application
async function bootstrap() {
    // Create a nest application out of above Module
    const app = await NestFactory.create(AppModule);
    // Create instance of app and make it listen to port 
    await app.listen(3000);
}
// Finally run the bootstap function to run the application
bootstrap();