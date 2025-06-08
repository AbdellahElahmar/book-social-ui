import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./features/login/login.component";
import {RegistrationComponent} from "./features/registration/registration.component";
import {ActivateAccountComponent} from "./features/activate-account/activate-account.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    title: 'Register'
  },
  {
    path: 'activate-account',
    component: ActivateAccountComponent,
    title: 'Activate Account'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
