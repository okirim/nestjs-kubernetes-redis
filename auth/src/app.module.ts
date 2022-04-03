import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities:[],
      autoLoadEntities:true
    }),
    ClientsModule.register([
      {
        name:"AUTH_SERVICE",
        transport:Transport.REDIS,
        options:{
          url:process.env.REDIS_HOST
        }
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
