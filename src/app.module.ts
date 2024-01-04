import { Module } from '@nestjs/common';
import { TgbotModule } from './tgbot/tgbot.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TgbotModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    })
   
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
