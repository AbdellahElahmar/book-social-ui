import { Component } from '@angular/core';
import {AuthenticationRequest} from "../../core/models/authentication-request";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../core/services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  authRequest: AuthenticationRequest = {email: '', password: ''}
  errorMsg: string[] = []

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }
  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe(next => {
      //Save the token
      this.router.navigate(['books'])
    },
      error => {
      console.log(error)
      })

  }
  register() {
    this.router.navigate(['register'])

  }
}
