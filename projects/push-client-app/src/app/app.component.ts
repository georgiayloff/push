import { Component, OnInit } from '@angular/core';
import { SseService } from './sse.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'push-client-app';
  message = '';

  constructor(private sseService: SseService,
    private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.sseService.start();
  }

  onClick() {
    this.httpClient.post('http://localhost:3000/push', { data: this.message }, { responseType: 'text' }).subscribe(data => {
      console.log(data);
    });
  }

  onKey(event: any) {
    this.message = event.target.value;
  }
}
