
export const LOGIN_STATE = 'LoginState';

export interface LoginState {
    isLoadingLogin: boolean;
    isLoadingRecuperarSenha: boolean;
    isLoadingCadastro: boolean;
}


export const initialState: LoginState = {
    isLoadingLogin: false,
    isLoadingRecuperarSenha: false,
    isLoadingCadastro: false
}

export const selectIsLoadingLogin = (state: LoginState) => state.isLoadingLogin;