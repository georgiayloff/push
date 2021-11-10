import { Controller, MessageEvent, Sse } from '@nestjs/common';
import { interval, map, Observable } from 'rxjs';

@Controller('sse')
export class SseController {
  @Sse()
  sse(): Observable<MessageEvent> {
    return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
  }
}
