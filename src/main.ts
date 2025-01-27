import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.static(join(__dirname, '..', 'public')));
  await app.listen(process.env.PORT ?? 3000);
  console.log('Application is running on local host p3000')
}
bootstrap();
