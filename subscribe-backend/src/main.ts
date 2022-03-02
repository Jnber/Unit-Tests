import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const cors = require('cors');
  const app = await NestFactory.create(AppModule);
  app.use(cors()); // Use this after the variable declaration
  await app.listen(3000);
}
bootstrap();
