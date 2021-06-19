import { Controller, Get } from '@nestjs/common';
import { Message } from '@test/api-interfaces';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    console.log('crap')

    return this.appService.getData();
  }
}
