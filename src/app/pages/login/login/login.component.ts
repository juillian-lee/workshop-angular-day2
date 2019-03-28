import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorMessage } from 'ng-bootstrap-form-validation';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  form: FormGroup;

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
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [true]
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }


}
