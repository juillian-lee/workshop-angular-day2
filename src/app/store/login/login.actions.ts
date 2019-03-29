import { Action } from '@ngrx/store';
import { LoginCodeErrors } from './login.state';


export enum LoginActions {
    LOGIN = "[LOGIN] - Login - ",
    LOGIN_SUCCESS = "[LOGIN] - Login success -",
    LOGIN_ERROR = "[LOGIN] - Login error -",
    CHECK_USER_LOGADO = '[LOGIN] - Check user logado - ',
    CHECK_USER_LOGADO_SUCCESS = '[LOGIN] - Check user logado successs -',
    RECUPERAR_SENHA = '[LOGIN] - Recuperar senha - ',
    RECUPERAR_SENHA_SUCCESS = '[LOGIN] - Recuperar senha success - ',
    RECUPERAR_SENHA_ERROR = '[LOGIN] - Recuperar senha error -',
    LOGOUT = '[LOGIN] - Logout -',
    LOGOUT_SUCCESS = '[LOGIN] - Logout success -',
    CADASTRO = '[LOGIN] - Cadastro -',
    CADASTRO_SUCCESS = '[LOGIN] - Cadastro success -',
    CADASTRO_ERROR = '[LOGIN] - Cadastro error - ',
    RESET_ERRORS = '[LOGIN] - Reset Errors -',
    ROUTER_NAVIGATE = '@ngrx/router-store/navigated',
}


export interface LoginActionPayload {
    username: string;
    password: string;
}
export class LoginAction implements Action {
    readonly type = LoginActions.LOGIN;
    payload: LoginActionPayload;

    constructor(payload: LoginActionPayload) {
        this.payload = payload;
    }
}

export class LoginSuccessAction implements Action {
    readonly type = LoginActions.LOGIN_SUCCESS;

    payload: firebase.User;

    constructor(payload: firebase.User) {
        this.payload = payload;
    }
}

export class LoginErrorAction implements Action {
    readonly type = LoginActions.LOGIN_ERROR;
    payload: LoginCodeErrors

    constructor(payload: LoginCodeErrors) {
        this.payload = payload;
    }
}

export interface CadastroActionPayload {
    nome: string;
    email: string;
    password: string;
}
export class CadastroAction implements Action {
    readonly type = LoginActions.CADASTRO;
    payload: CadastroActionPayload;

    constructor(payload: CadastroActionPayload) {
        this.payload = payload;
    }
}

export class CadastroSuccessAction implements Action {
    readonly type = LoginActions.CADASTRO_SUCCESS;
}

export class CadastroErrorAction implements Action {
    readonly type = LoginActions.CADASTRO_ERROR;

    payload: LoginCodeErrors;

    constructor(payload: LoginCodeErrors) {
        this.payload = payload;
    }

}

export class CheckUserLogadoAction implements Action {
    readonly type = LoginActions.CHECK_USER_LOGADO;
}

export class CheckUserLogadoSuccessAction implements Action {
    readonly type = LoginActions.CHECK_USER_LOGADO_SUCCESS;
}

export class RouterNavigateAction implements Action {
    readonly type = LoginActions.ROUTER_NAVIGATE;
}

export class LogoutAction implements Action {
    readonly type = LoginActions.LOGOUT;
}

export class LogoutSuccessAction implements Action {
    readonly type = LoginActions.LOGOUT_SUCCESS;
}

export class RecuperarSenhaAction implements Action {
    readonly type = LoginActions.RECUPERAR_SENHA;
    payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }
}

export class RecuperarSenhaSuccessAction implements Action {
    readonly type = LoginActions.RECUPERAR_SENHA_SUCCESS;
}

export class RecuperarSenhaErrorAction implements Action {
    readonly type = LoginActions.RECUPERAR_SENHA_ERROR;
    payload: LoginCodeErrors;

    constructor(payload: LoginCodeErrors) {
        this.payload = payload;
    }
}

export class ResetErrorsAction implements Action {
    readonly type = LoginActions.RESET_ERRORS;

}

export type TypeActions = 
    LoginAction 
    | LoginSuccessAction
    | LoginErrorAction
    | CadastroAction
    | CadastroSuccessAction
    | CadastroErrorAction
    | RouterNavigateAction
    | CheckUserLogadoAction
    | CheckUserLogadoSuccessAction
    | LogoutAction
    | LogoutSuccessAction
    | RecuperarSenhaAction
    | RecuperarSenhaSuccessAction
    | RecuperarSenhaErrorAction
    | ResetErrorsAction