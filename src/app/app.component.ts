import { Component, AfterViewInit } from '@angular/core';
import { ArgonUtil } from './shared/argon.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'workshop-login-example';

  ngAfterViewInit(): void {
    ArgonUtil.start();
  }
}
