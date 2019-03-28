import * as loginActions from './login.actions';
import * as loginState from './login.state';


export function loginReducer(
    state: loginState.LoginState = loginState.initialState,
    action: loginActions.TypeActions
): loginState.LoginState {

    switch (action.type) {
        case loginActions.LoginActions.LOGIN:
            return {
                ...state,
                ...loginState.initialState,
                isLoadingLogin: true,
                email: action.payload.username
            }
        case loginActions.LoginActions.LOGIN_SUCCESS:
            return {
                ...state,
                isLoadingLogin: false
            }
        case loginActions.LoginActions.LOGIN_ERROR:
            return {
                ...state,
                isLoadingLogin: false,
                codeLoginError: action.payload
            }
        case loginActions.LoginActions.CADASTRO:
            return {
                ...state,
                isLoadingCadastro: true,
                email: action.payload.email
            }
        case loginActions.LoginActions.CADASTRO_ERROR:
            return {
                ...state,
                isLoadingCadastro: false,
                codeCadastroError: action.payload
            }
        case loginActions.LoginActions.ROUTER_NAVIGATE:
            return {
                ...state,
                isLoadingCadastro: false,
                isLoadingLogin: false,
                isLoadingRecuperarSenha: false,
                codeCadastroError: null,
                codeLoginError: null
            }
        default:
            return state;
    }

}