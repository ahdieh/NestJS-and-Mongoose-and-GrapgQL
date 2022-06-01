import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { HobbyModule } from './hobby/hobby.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PersonModule,
    HobbyModule,
    MongooseModule.forRoot('mongodb://localhost:27017/three-in-one-db'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
