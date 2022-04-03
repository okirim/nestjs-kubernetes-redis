import { Controller, Get, Inject } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RedisContext, ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    @Inject('USERS_SERVICE') private client:ClientProxy
    ) {}

  @MessagePattern('test')
  getNotifications(@Payload() data: number[], @Ctx() context: RedisContext) {
    console.log(process.env.REDIS_HOST)
    console.log(`Channel: ${context.getChannel()}`);
    return 'back';
  }
}
