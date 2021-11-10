import { Injectable } from '@angular/core';
import { EventSourcePolyfill } from 'ng-event-source';

@Injectable({
  providedIn: 'root'
})
export class SseService {

  constructor() { }

  private createEventSource(): EventSourcePolyfill {
    return new EventSourcePolyfill('/sse', {
      headers: {
        'Customer-Id': 'John ',
      },
      withCredentials: false,
    });
  }

  public start() {
    const eventSource = this.createEventSource();

    eventSource.onmessage = (event) => {
      console.log('Data: ', event.data);
    }
  }
}
