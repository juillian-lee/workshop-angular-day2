import { FormGroup } from '@angular/forms';

export class LoginCadastroValidator {
    static errorsMessage = {
        nome: [
            {
                error: 'required',
                format: () => `Informe seu nome`
            }
        ],
        email: [
            {
                error: 'required',
                format: () => `Informe seu e-mail`
            }, {
                error: 'email',
                format: () => `E-mail não é válido`
            }
        ],
        password: [
            {
                error: 'required',
                format: () => `Digite uma senha`
            },
            {
                error: 'minlength',
                format: (_, err) => `A senha deve ter no mínimo ${err.requiredLength} caracteres`
            }
        ],
        confirmPassword: [
            {
                error: 'required',
                format: () => `Confirme a senha`
            }, {
                error: 'notSame',
                format: () => `As senhas não são iguais`
            }
        ],
    }


    static checkPasswords(form: FormGroup) {
        let pass = form.controls.password.value;
        let confirmPass = form.controls.confirmPassword.value;

        if(pass === '' || confirmPass === '') {
            return;
        }

        if (pass !== confirmPass) {
            form.controls.confirmPassword.setErrors({ notSame: true });
            return;
        }
        form.controls.confirmPassword.setErrors(null);
    }
}