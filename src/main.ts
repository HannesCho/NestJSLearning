import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//Here start the NestJS

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
