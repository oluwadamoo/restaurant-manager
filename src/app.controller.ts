import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CustomQueryBuilder, ObjectionService } from '@squareboat/nestjs-objection';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): { message: string } {
    // console.log(this.config.get("DB_USER"))
    return this.appService.getHello();
  }
}
