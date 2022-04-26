import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

// Add function which run when we start our application
async function bootstrap() {
    // Create a nest application out of above Module
    const app = await NestFactory.create(AppModule);
    // Create instance of app and make it listen to port 
    await app.listen(3000);
}
// Finally run the bootstap function to run the application
bootstrap();