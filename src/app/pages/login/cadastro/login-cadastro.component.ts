import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginCadastroValidator } from './login-cadastro-validator';
import { LoginCadastroForm } from './login-cadastro-builder-form';

@Component({
  selector: 'app-login-cadastro',
  templateUrl: './login-cadastro.component.html'
})
export class LoginCadastroComponent implements OnInit {
  errorsMessage = LoginCadastroValidator.errorsMessage;
  form: FormGroup = LoginCadastroForm.builderForm(this.fb);
  
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    
  }

  onSubmit() {
    console.log(this.form.value);
  }

}
