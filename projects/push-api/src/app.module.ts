import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SseController } from './sse/sse.controller';
import { SseService } from './sse/sse.service';

@Module({
  imports: [],
  controllers: [AppController, SseController],
  providers: [AppService, SseService],
})
export class AppModule {}
