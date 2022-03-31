// import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ClientsModule,Transport } from '@nestjs/microservices';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GATEWAY_SERVICE',
        transport: Transport.REDIS,
        options: {
          url: process.env.REDIS_HOST,
        }
      },
    ]),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
