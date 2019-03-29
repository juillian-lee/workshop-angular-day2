import { LoginCodeErrors } from './login.state';
import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import * as loginActions from './login.actions';
import { from, of, Observable, empty} from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Injectable()
export class LoginEffects {

    constructor(
        private actions$: Actions,
        private firebaseAuth: AngularFireAuth
    ) {}

    @Effect()
    loginAction$ = this.actions$.pipe(
        ofType<loginActions.LoginAction>(loginActions.LoginActions.LOGIN),
        map(action => action.payload),
        mergeMap(payload => {
            return from(this.firebaseAuth.auth.signInWithEmailAndPassword(payload.username, payload.password)).pipe(
                map(_ => {
                    const user = this.firebaseAuth.auth.currentUser;
                    return new loginActions.LoginSuccessAction(user)
                }),
                catchError(err => {
                    let codeError = LoginCodeErrors.UNKNOWN;
                    if(err.code === "auth/user-not-found") {
                        codeError = LoginCodeErrors.USER_NOT_FOUND;
                    } else if(err.code === 'auth/wrong-password') {
                        codeError = LoginCodeErrors.SENHA_INVALIDA;
                    }
                    return of(new loginActions.LoginErrorAction(codeError));
                })
            )
        })
    )
    

    @Effect()
    cadastroEffect$ = this.actions$.pipe(
        ofType<loginActions.CadastroAction>(loginActions.LoginActions.CADASTRO),
        map(action => action.payload),
        mergeMap(payload => {
            return from(this.firebaseAuth.auth.createUserWithEmailAndPassword(payload.email, payload.password)).pipe(
                mergeMap((response: firebase.auth.UserCredential) => {
                    return from(response.user.updateProfile({displayName: payload.nome})).pipe(
                        switchMap(_ => {
                            const user = this.firebaseAuth.auth.currentUser;
                            return [
                                new loginActions.CadastroSuccessAction(),
                                new loginActions.LoginSuccessAction(user)
                            ]
                        }),
                        catchError((err) => {
                            const user = this.firebaseAuth.auth.currentUser;
                            return of(
                                new loginActions.CadastroSuccessAction(), 
                                new loginActions.LoginSuccessAction(user)
                            );
                        })
                    )
                }),
                catchError(err => {
                    let codeError = LoginCodeErrors.UNKNOWN;
                    if(err.code === 'auth/email-already-in-use') {
                        codeError = LoginCodeErrors.USER_ALREADY_IN_USE;
                    }
                    return of(new loginActions.CadastroErrorAction(codeError));
                })
            )
        })
    )

    @Effect()
    checkUserLogadoAction$ = this.actions$.pipe(
        ofType<loginActions.CheckUserLogadoAction>(loginActions.LoginActions.CHECK_USER_LOGADO),
        mergeMap(_ => {
            return Observable.create((observer) => {
                this.firebaseAuth.auth.onAuthStateChanged(user => {
                    if(!observer.closed) {
                        observer.next(user);
                        observer.complete();
                    }
                });
            }).pipe(
                switchMap((user: firebase.User) => {
                    return [
                        new loginActions.CheckUserLogadoSuccessAction(),
                        new loginActions.LoginSuccessAction(user)
                    ]
                })
            )
        })
    )

    @Effect()
    logout$ = this.actions$.pipe(
        ofType<loginActions.LogoutAction>(loginActions.LoginActions.LOGOUT),
        mergeMap(_ => {
            return from(this.firebaseAuth.auth.signOut()).pipe(
                map(_ => {
                    return new loginActions.LogoutSuccessAction();
                })
            )
        })
    )

    @Effect()
    recuperarSenha$ = this.actions$.pipe(
        ofType<loginActions.RecuperarSenhaAction>(loginActions.LoginActions.RECUPERAR_SENHA),
        map(action => action.payload),
        mergeMap(payload => {
            return from(this.firebaseAuth.auth.sendPasswordResetEmail(payload)).pipe(
                map(_ => {
                    return new loginActions.RecuperarSenhaSuccessAction();
                }),
                catchError(err => {
                    let codeError = LoginCodeErrors.UNKNOWN;
                    if(err.code === "auth/user-not-found") {
                        codeError = LoginCodeErrors.USER_NOT_FOUND;
                    }
                    return of(new loginActions.RecuperarSenhaErrorAction(codeError));
                })
            )
        })
    )

}