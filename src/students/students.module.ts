import { Module } from '@nestjs/common';
import { MainController } from './controllers/main/main.controller';

@Module({
  controllers: [MainController],
})
export class StudentsModule {}
