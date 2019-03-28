import * as state from './login.state';
import { Injectable } from "@angular/core";
import { Store, createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';
import * as loginActions from './login.actions';

@Injectable()
export class LoginStoreService {
    private loginState = createFeatureSelector<state.LoginState>(state.LOGIN_STATE);


    constructor(
        private store: Store<AppState>
    ) {}


    private isLoadingLogin = createSelector(this.loginState, state.selectIsLoadingLogin);

    getIsLoadingLogin() {
        return this.store.select(this.isLoadingLogin);
    }

    
    dispatchLoginAction(payload: loginActions.LoginActionPayload) {
        this.store.dispatch(new loginActions.LoginAction(payload));
    }

}