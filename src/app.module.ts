import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [StudentsModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
