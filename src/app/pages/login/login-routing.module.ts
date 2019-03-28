import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginLayoutComponent } from './login-layout.component';
import { LoginCadastroComponent } from './cadastro/login-cadastro.component';

const routes: Routes = [
  {
    path: '', 
    component: LoginLayoutComponent, 
    children: [
      { path: '', component: LoginComponent },
      { path: 'cadastro', component: LoginCadastroComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
