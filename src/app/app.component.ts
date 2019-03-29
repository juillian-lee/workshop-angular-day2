import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ArgonUtil } from './shared/argon.util';
import { LoginStoreService } from './store/login/login-store.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,  AfterViewInit {
	title = 'workshop-login-example';

	isCheckLogin$: Observable<boolean>;

	constructor(
		private loginStoreService: LoginStoreService,
		private router: Router
	) { }

	ngOnInit(): void {
		setTimeout(() => {
			this.loginStoreService.getIsCheckLogin()
		}, 0);
	}

	ngAfterViewInit(): void {
		ArgonUtil.start();
		this.loginStoreService.dispatchCheckUsuarioLogadoAction();
		this.loginStoreService.getUser().subscribe(user => {
			if (user == null && !location.pathname.includes('/login')) {
				this.router.navigate(['/login']);
			} else if (user !== null && location.pathname.includes('/login')) {
				this.router.navigate(['/']);
			} else {
				this.router.navigate([location.pathname]).catch(() => {
					this.router.navigate(['/']);
				});
			}
		})

	}
}
