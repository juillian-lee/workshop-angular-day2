
export const LOGIN_STATE = 'LoginState';

export enum LoginCodeErrors {
    USER_NOT_FOUND = 'login/user-not-found',
    USER_ALREADY_IN_USE = 'auth/email-already-in-use',
    SENHA_INVALIDA = "auth/wrong-password",
    UNKNOWN = "unknown"
}

export interface LoginState {
    isLoadingLogin: boolean;
    codeLoginError: LoginCodeErrors;
    isLoadingRecuperarSenha: boolean;
    isLoadingCadastro: boolean;
    codeCadastroError: LoginCodeErrors;
    email: string;
    user: firebase.User
}


export const initialState: LoginState = {
    isLoadingLogin: false,
    isLoadingRecuperarSenha: false,
    isLoadingCadastro: false,
    codeLoginError: null,
    codeCadastroError: null,
    email: null,
    user: null
}


export const selectEmail = (state: LoginState) => state.email;

/**
 * Login
 */
export const selectIsLoadingLogin = (state: LoginState) => state.isLoadingLogin;
export const selectCodeLoginError = (state: LoginState) => state.codeLoginError;



/**
 * Cadastro
 */
export const selectIsLoadingCadastro = (state: LoginState) => state.isLoadingCadastro;
export const selectCodeCadastroError = (state: LoginState) => state.codeCadastroError;

