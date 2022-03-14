import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   // Use to validate content in every route handler. This is smart and doesn't run on routes where we don't apply it 
   app.useGlobalPipes(
    new ValidationPipe()
  );
  await app.listen(3000);
}
bootstrap();
