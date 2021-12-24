import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  //take url and execute the function, ex)router on express
  providers: [AppService],
})
export class AppModule {}
//Module: act like app, which can do onething.
//eventually everything will be in the AppModule.
//because Nestjs use AppModule to create the application!
