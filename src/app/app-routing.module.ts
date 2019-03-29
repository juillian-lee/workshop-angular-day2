import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './pages/login/login.module';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => LoginModule },
  { path: '', component: LayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
