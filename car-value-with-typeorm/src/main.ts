import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Cookie session have some settings that don't work nicely with current tsconfig setup
const cookieSession = require('cookie-session')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieSession({
    keys: ['cookieKeys'], // Go for strong keys to encrypt cookies data
  }))
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true // Strong Parameters listing to allow defined parameters in a request
    })
  )
  await app.listen(3000);
}
bootstrap();
