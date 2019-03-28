import { Action } from '@ngrx/store';
import { LoginCodeErrors } from './login.state';


export enum LoginActions {
    LOGIN = "[LOGIN] - Login - ",
    LOGIN_SUCCESS = "[LOGIN] - Login success -",
    LOGIN_ERROR = "[LOGIN] - Login error -",
    CHECK_USER_LOGADO = '[LOGIN] - Check user logado - ',
    CADASTRO = '[CADASTRO] - Cadastro -',
    CADASTRO_SUCCESS = '[CADASTRO] - Cadastro success -',
    CADASTRO_ERROR = '[CADASTRO] - Cadastro error - ',
    ROUTER_NAVIGATE = '@ngrx/router-store/navigated'
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

export class RouterNavigateAction implements Action {
    readonly type = LoginActions.ROUTER_NAVIGATE;
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