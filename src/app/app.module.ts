import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './features/login/login.component';
import {FormsModule} from "@angular/forms";
import { RegistrationComponent } from './features/registration/registration.component';
import { ActivateAccountComponent } from './features/activate-account/activate-account.component';
import {CodeInputModule} from "angular-code-input";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ActivateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CodeInputModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
