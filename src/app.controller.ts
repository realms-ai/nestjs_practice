import { Controller, Get } from "@nestjs/common";

// Decorator: telling nestjs that this is a main controller inside application
// It will handle routes and incoming requests
@Controller()
export class AppController {
    // Adding Configurations here

    // 1. Setting Route function to route requests
    @Get()
    getRootRoute() {
        return 'Hi There!';
    }

    // Route is /bye here 
    @Get('bye')
    getByeThere() {
        return "Bye There!"
    }

}

// Decorators help us to write the routes
// e.g. /app/test route will now display this result
// In here 'app' will work as namespace
// 'test' will work as a end route
@Controller('app')
export class NewController {
    @Get('test')
    getRootRoute() {
        return "Hi There!!! Testing in Progress"
    }
}