import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //Get Decorator; like get router in express.
  getHello(): string {
    return this.appService.getHello();
    // why need the Service here?
    //Nestjs wants to separate controller and logic(business logic).
    //Controller just get url and execute function.
    //Service has actual functions.
  }

  @Get('/hello') // get request to url /hello and execute the function.
  sayHello(): string {
    return this.appService.getHi();
    //the function names are not necessarily same.
  }
  //Note! No space btw decorator and function.
}
