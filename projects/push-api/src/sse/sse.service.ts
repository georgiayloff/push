import { Injectable, MessageEvent } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SseService {

  clients: Map<string, Subject<MessageEvent>>;


  constructor() {
    this.clients = new Map();
  }

  registerClient(client: any): Observable<MessageEvent> {
    console.log('Registering client: ', client);
    const clientSubj = new Subject<MessageEvent>();
    this.clients.set(client, clientSubj);
    return clientSubj.asObservable();
  }

  broadcast(data: string) {
    console.log('broadcast', data);
    Array.from(this.clients.values()).forEach((clientSubj: Subject<MessageEvent>) => {
      clientSubj.next({ data: data });
    })
  }
}
