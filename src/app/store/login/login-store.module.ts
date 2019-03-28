import { LoginEffects } from './login.effects';
import { LOGIN_STATE } from './login.state';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { loginReducer } from './login.reducer';
import { LoginStoreService } from './login-store.service';



@NgModule({
    declarations: [],
    imports: [
        StoreModule.forFeature(LOGIN_STATE, loginReducer),
        EffectsModule.forFeature([LoginEffects]),
    ],
    exports: [
        StoreModule,
        EffectsModule
    ],
    providers: [
        LoginStoreService
    ]
})
export class LoginStoreModule {}