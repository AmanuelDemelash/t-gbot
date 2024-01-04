import { Module } from '@nestjs/common';
import { TgbotService } from './tgbot.service';
import { TgbotController } from './tgbot.controller';

@Module({
  controllers: [TgbotController],
  providers: [TgbotService],
})
export class TgbotModule {}
