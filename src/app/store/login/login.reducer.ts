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
                isLoadingLogin: true
            }
        case loginActions.LoginActions.LOGIN_SUCCESS:
            return {
                ...state,
                isLoadingLogin: false
            }
        default:
            return state;
    }

}