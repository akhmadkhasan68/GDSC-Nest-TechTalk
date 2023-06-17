import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config';
import { ValidationPipe } from '@nestjs/common';
import { EntityNotFoundExceptionFilter } from './common/filters/entity-not-found-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new EntityNotFoundExceptionFilter());
  await app.listen(config.port);
}
bootstrap();
