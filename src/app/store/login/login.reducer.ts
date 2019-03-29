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
                isLoadingLogin: false,
                user: action.payload
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
                email: action.payload.email,
                codeCadastroError: null,
            }
        case loginActions.LoginActions.CADASTRO_SUCCESS:
            return {
                ...state,
                isLoadingCadastro: false
            }
        case loginActions.LoginActions.CADASTRO_ERROR:
            return {
                ...state,
                isLoadingCadastro: false,
                codeCadastroError: action.payload
            }
        case loginActions.LoginActions.ROUTER_NAVIGATE:
        case loginActions.LoginActions.RESET_ERRORS:
            return {
                ...state,
                isLoadingCadastro: false,
                isLoadingLogin: false,
                isLoadingRecuperarSenha: false,
                isRecuperarSenhaSuccess: false,
                codeCadastroError: null,
                codeLoginError: null,
                codeRecuperarSenhaError: null
            }
        case loginActions.LoginActions.CHECK_USER_LOGADO:
            return {
                ...state,
                isCheckLogin: true
            }
        case loginActions.LoginActions.CHECK_USER_LOGADO_SUCCESS:
            return {
                ...state,
                isCheckLogin: false
            }
        case loginActions.LoginActions.LOGOUT_SUCCESS:
            return {
                ...loginState.initialState
            }
        case loginActions.LoginActions.RECUPERAR_SENHA:
            return {
                ...state,
                isLoadingRecuperarSenha: true,
                email: action.payload
            }
        case loginActions.LoginActions.RECUPERAR_SENHA_SUCCESS:
            return {
                ...state,
                isLoadingRecuperarSenha: false,
                isRecuperarSenhaSuccess: true
            }
        case loginActions.LoginActions.RECUPERAR_SENHA_ERROR:
            return {
                ...state,
                isLoadingRecuperarSenha: false,
                codeRecuperarSenhaError: action.payload
            }
        default:
            return state;
    }

}