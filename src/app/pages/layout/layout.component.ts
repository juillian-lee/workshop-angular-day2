import { Component, OnInit } from '@angular/core';
import { LoginStoreService } from 'src/app/store/login/login-store.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private loginStoreService: LoginStoreService
  ) { }

  ngOnInit() {
  }

  onClickLogout() {
    this.loginStoreService.dispatchLogoutAction();
  }

}
