import { LoginStoreService } from './../../../store/login/login-store.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrorMessage } from 'ng-bootstrap-form-validation';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.component.html'
})
export class RecuperarSenhaComponent implements OnInit {

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
    private loginStoreService: LoginStoreService
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

  }

  onSubmit() {
    
  }
  
}
