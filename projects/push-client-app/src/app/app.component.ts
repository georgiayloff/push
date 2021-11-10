import { Component, OnInit } from '@angular/core';
import { SseService } from './sse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'push-client-app';

  constructor(private sseService: SseService) {

  }

  ngOnInit() {
    this.sseService.start();
  }
}
