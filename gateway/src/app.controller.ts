import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('GATEWAY_SERVICE') private client: ClientProxy,
    ) {}

  @Get('/')
  getHello(){
    console.log('hello kadiro from gateway')
    console.log(process.env.REDIS_HOST)
    const pattern = 'test';
    const payload = [1, 2, 3];
    return this.client.send<string>(pattern, payload);
  }
  @Get('/users')
  getUsers(): string {
    console.log('users')
    return 'get all users';
  }
}
