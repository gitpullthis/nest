import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS,
    options: {
      url: "redis://127.0.0.1:6379",
      retryAttempts: 2,
      retryDelay: 500
    }
  });
  await app.listen();
}
bootstrap();
