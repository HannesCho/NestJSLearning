import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//Here start the NestJS

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      // filter out non-white list(not in the dto class)
      transform: true,
      // convert data to actual type (when you send something(request) it becomes string)
    }),
  ); //to Validate your data
  await app.listen(3000);
}
bootstrap();
