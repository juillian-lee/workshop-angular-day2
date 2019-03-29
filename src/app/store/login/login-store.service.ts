import * as state from './login.state';
import { Injectable } from "@angular/core";
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as loginActions from './login.actions';
import { filter } from 'rxjs/operators';

@Injectable()
export class LoginStoreService {
    constructor(
        private store: Store<AppState>
    ) {}

    private loginState = createFeatureSelector<state.LoginState>(state.LOGIN_STATE);
    private isLoadingLogin = createSelector(this.loginState, state.selectIsLoadingLogin);
    private codeLoginError = createSelector(this.loginState, state.selectCodeLoginError);
    private email = createSelector(this.loginState, state.selectEmail);
    private isLoadingCadastro = createSelector(this.loginState, state.selectIsLoadingCadastro);
    private codeCadastroError = createSelector(this.loginState, state.selectCodeCadastroError);
    private user = createSelector(this.loginState, state.selectUser);
    private isCheckLogin = createSelector(this.loginState, state.selectIsCheckLogin);
    private isLoadingRecuperarSenha = createSelector(this.loginState, state.selectIsLoadingRecuperarSenha);
    private isRecuperarSenhaSuccess = createSelector(this.loginState, state.selectIsRecuperarSenhaSuccess);
    private codeRecuperarSenhaError = createSelector(this.loginState, state.selectCodeRecuperarSenhaError);

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

    getUser() {
        return this.store.select(this.user);
    }

    getIsLoadingCadastro() {
        return this.store.select(this.isLoadingCadastro);
    }

    getCodeCadastroError() {
        return this.store.select(this.codeCadastroError);
    }

    getIsCheckLogin() {
        return this.store.select(this.isCheckLogin);
    }
    
    getIsLoadingRecuperarSenha() {
        return this.store.select(this.isLoadingRecuperarSenha)
    }

    getIsRecuperarSenhaSuccess() {
        return this.store.select(this.isRecuperarSenhaSuccess).pipe(
            filter(isShow => isShow)
        );
    }

    getCodeRecuperarSenhaError() {
        return this.store.select(this.codeRecuperarSenhaError);
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

    dispatchLogoutAction() {
        this.store.dispatch(new loginActions.LogoutAction());
    }

    dispatchRecuperarSenhaAction(payload: string) {
        this.store.dispatch(new loginActions.RecuperarSenhaAction(payload));
    }


    dispatchResetErrorsAction() {
        this.store.dispatch(new loginActions.ResetErrorsAction());
    }
}