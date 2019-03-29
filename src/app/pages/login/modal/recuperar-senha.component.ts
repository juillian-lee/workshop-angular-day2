import { LoginStoreService } from './../../../store/login/login-store.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorMessage } from 'ng-bootstrap-form-validation';
import { Observable } from 'rxjs';
import { LoginCodeErrors } from 'src/app/store/login/login.state';
import { Router } from '@angular/router';

declare var $: any;

@Component({
	selector: 'app-recuperar-senha',
	templateUrl: './recuperar-senha.component.html'
})
export class RecuperarSenhaComponent implements OnInit, AfterViewInit {
	isLoadingRecuperarSenha$: Observable<boolean> = this.loginStoreService.getIsLoadingRecuperarSenha();
	codeRecuperarSenhaError$: Observable<LoginCodeErrors> = this.loginStoreService.getCodeRecuperarSenhaError();
  	LoginCodeErrors = LoginCodeErrors;
	form: FormGroup;


	customErrorMessagesEmail: ErrorMessage[] = [
		{
			error: 'required',
			format: _ => `Informe seu e-mail`
		}, {
			error: 'email',
			format: _ => `E-mail não é válido`
		}
	];

	constructor(
		private fb: FormBuilder,
		private loginStoreService: LoginStoreService,
		private router: Router
	) { }

	ngOnInit() {

		this.form = this.fb.group({
			email: ['', [Validators.required, Validators.email]]
		})

		this.loginStoreService.getEmail().subscribe(email => {
			this.form.patchValue({
				email: email
			});
		});


		this.loginStoreService.getIsRecuperarSenhaSuccess().subscribe(_ =>{
			$("#modal-notification").modal('show');
		});
	}

	ngAfterViewInit(): void {
		$("#modal-form").on('hide.bs.modal', () => {
			this.loginStoreService.dispatchResetErrorsAction();
		});
		
		$("#modal-notification").on('show.bs.modal',  () => {
			$("#modal-form").modal('hide');
		});
	}

	onSubmit() {
		this.loginStoreService.dispatchRecuperarSenhaAction(this.form.value.email);
	}

	onClickCadastro(event) {
		event.preventDefault();
		$("#modal-form").modal('hide');
		this.router.navigate(['/login/cadastro']);

	}

}
