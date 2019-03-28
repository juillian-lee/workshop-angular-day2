import * as state from './login.state';
import { Injectable } from "@angular/core";
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as loginActions from './login.actions';
import { filter } from 'rxjs/operators';

@Injectable()
export class LoginStoreService {
    private loginState = createFeatureSelector<state.LoginState>(state.LOGIN_STATE);


    constructor(
        private store: Store<AppState>
    ) {}


    private isLoadingLogin = createSelector(this.loginState, state.selectIsLoadingLogin);
    private codeLoginError = createSelector(this.loginState, state.selectCodeLoginError);
    private email = createSelector(this.loginState, state.selectEmail);
    private isLoadingCadastro = createSelector(this.loginState, state.selectIsLoadingCadastro);
    private codeCadastroError = createSelector(this.loginState, state.selectCodeCadastroError);

    getIsLoadingLogin() {
        return this.store.select(this.isLoadingLogin);
    }


    getCodeLoginError() {
        return this.store.select(this.codeLoginError);
    }

    getEmail() {
        return this.store.select(this.email).pipe(
            filter(email => !!email)
        );
    }

    getIsLoadingCadastro() {
        return this.store.select(this.isLoadingCadastro);
    }

    getCodeCadastroError() {
        return this.store.select(this.codeCadastroError);
    }
    
    dispatchLoginAction(payload: loginActions.LoginActionPayload) {
        this.store.dispatch(new loginActions.LoginAction(payload));
    }

    dispatchCadastroAction(payload: loginActions.CadastroActionPayload) {
        this.store.dispatch(new loginActions.CadastroAction(payload));
    }

    dispatchCheckUsuarioLogadoAction() {
        this.store.dispatch(new loginActions.CheckUserLogadoAction());
    }

}