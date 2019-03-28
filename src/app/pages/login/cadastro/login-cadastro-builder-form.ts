import { Validators, FormBuilder } from '@angular/forms';
import { LoginCadastroValidator } from './login-cadastro-validator';


export class LoginCadastroForm {
    static builderForm(fb: FormBuilder) {
        return fb.group({
            nome: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required]]
        }, 
        {
            validators: LoginCadastroValidator.checkPasswords
        });
    }
}