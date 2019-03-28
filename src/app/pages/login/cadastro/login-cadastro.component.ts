import { LoginCodeErrors } from 'src/app/store/login/login.state';
import { LoginStoreService } from './../../../store/login/login-store.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginCadastroValidator } from './login-cadastro-validator';
import { LoginCadastroForm } from './login-cadastro-builder-form';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html'
})
export class LoginCadastroComponent implements OnInit {
  errorsMessage = LoginCadastroValidator.errorsMessage;
  form: FormGroup = LoginCadastroForm.builderForm(this.fb);

  isLoadingCadastro$: Observable<boolean> = this.loginStoreService.getIsLoadingCadastro();
  erroCodeCadastro$: Observable<LoginCodeErrors> = this.loginStoreService.getCodeCadastroError();
  LoginCodeErrors = LoginCodeErrors;
  
  constructor(
    private fb: FormBuilder,
    private loginStoreService: LoginStoreService
  ) { }

  ngOnInit() {
    this.patchEmailForm();
  }

  onSubmit() {
    this.loginStoreService.dispatchCadastroAction(this.form.value);
  }

  private patchEmailForm() {
    this.loginStoreService.getEmail().subscribe(email => {
      this.form.patchValue({
        email: email
      });
    });
  }

}
