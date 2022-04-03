import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [TypeOrmModule.forRoot({
    entities:[User],
    autoLoadEntities:true
  }),
 ClientsModule.register([
   {
     name:'USERS_SERVICE',
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
