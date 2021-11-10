import { Controller, Headers, MessageEvent, Sse } from '@nestjs/common';
import { Subject, interval, map, Observable } from 'rxjs';
import { SseService } from './sse.service';

@Controller('sse')
export class SseController {


  constructor(private sseService: SseService) { }

  @Sse()
  sse(@Headers('Customer-Id') customerId: string): Observable<MessageEvent> {
    console.log('Client connected: ', customerId);
    return this.sseService.registerClient(customerId);
  }
}
