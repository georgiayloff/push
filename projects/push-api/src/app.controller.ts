import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('/push')
  postPushMessage(@Body() body): string {
    return this.appService.push(body.data);
  }
}
