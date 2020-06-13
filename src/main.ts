import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000).then(_ => {
    Logger.debug(`=================================`)
    Logger.log(`  Server started on port 4000 ;)`)
    Logger.debug(`=================================`)
  });
}
bootstrap();
