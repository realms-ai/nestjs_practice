import { Controller, Module, Get } from "@nestjs/common";

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