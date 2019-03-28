import { Action } from '@ngrx/store';


export enum LoginActions {
    LOGIN = "[LOGIN] - Login - ",
    LOGIN_SUCCESS = "[LOGIN] - Login success -",
    LOGIN_ERROR = "[LOGIN] - Login error -"
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
}

export class LoginErrorAction implements Action {
    readonly type = LoginActions.LOGIN_ERROR;
}

export type TypeActions = 
    LoginAction 
    | LoginSuccessAction
    | LoginErrorAction