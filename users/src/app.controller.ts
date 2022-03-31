import { Controller, Get } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RedisContext } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('test')
  getNotifications(@Payload() data: number[], @Ctx() context: RedisContext) {
    console.log(process.env.REDIS_HOST)
    console.log(`Channel: ${context.getChannel()}`);
    return 'back';
  }
}
