import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    EmailModule,
    TypeOrmModule.forRoot({ autoLoadEntities: true, synchronize: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
