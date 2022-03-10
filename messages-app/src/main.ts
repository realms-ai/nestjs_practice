import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { MessagesModule } from './messages/messages.module';
// import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  // Use to validate content in every route handler. This is smart and doesn't run on routes where we don't apply it 
  app.useGlobalPipes(
    new ValidationPipe()
  );
  await app.listen(3000);
}
bootstrap();
