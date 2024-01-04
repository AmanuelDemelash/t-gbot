import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TgbotService } from './tgbot.service';
import { CreateTgbotDto } from './dto/create-tgbot.dto';
import { UpdateTgbotDto } from './dto/update-tgbot.dto';

@Controller('tgbot')
export class TgbotController {
  constructor(private readonly tgbotService: TgbotService) {}

  @Post()
  create(@Body() createTgbotDto: CreateTgbotDto) {
    return this.tgbotService.create(createTgbotDto);
  }

  @Get()
  findAll() {
    return this.tgbotService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tgbotService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTgbotDto: UpdateTgbotDto) {
    return this.tgbotService.update(+id, updateTgbotDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tgbotService.remove(+id);
  }
}
