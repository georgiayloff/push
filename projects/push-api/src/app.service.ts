import { Injectable } from '@nestjs/common';
import { SseService } from './sse/sse.service';

@Injectable()
export class AppService {

  constructor(private sseService: SseService) {

  }

  push(data: string): string {
    this.sseService.broadcast(data);
    return 'success';
  }
}
