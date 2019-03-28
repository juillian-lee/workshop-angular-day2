import { LoginStoreService } from './../../../store/login/login-store.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorMessage } from 'ng-bootstrap-form-validation';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isLoadingLogin$: Observable<boolean> = this.loginStoreService.getIsLoadingLogin();

  customErrorMessagesLogin: ErrorMessage[] = [
    {
      error: 'required',
      format: _ => `Informe seu e-mail`
    }, {
      error: 'email',
      format: _ => `E-mail não é válido`
    }
  ];

  customErrorMessagesSenha: ErrorMessage[] = [
    {
      error: 'required',
      format: _ => `Informe sua senha`
    }
  ];

  constructor(
    private fb: FormBuilder,
    private loginStoreService: LoginStoreService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [true]
    });

    

  }

  onSubmit() {
    this.loginStoreService.dispatchLoginAction(this.form.value);
  }


}
