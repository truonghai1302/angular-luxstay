import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular-luxstay/api-interfaces';

@Component({
  selector: 'angular-luxstay-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  a: string;
  constructor(private http: HttpClient) {}
}
