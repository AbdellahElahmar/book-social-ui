import { Component } from '@angular/core';
import {AuthenticationRequest} from "../../core/models/authentication-request";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../core/services/authentication.service";
import {TokenService} from "../../core/services/token/token.service";

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
    private authService: AuthenticationService,
    private tokenService: TokenService

  ) {
  }
  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string
        //this.router.navigate(['books'])
      },
      error: (err) => {
      if (err.error.validationErrors) {
        this.errorMsg = err.error.validationErrors
      } else {
        this.errorMsg.push(err.error.error)
      }
    }
  })

  }
  register() {
    this.router.navigate(['registration'])

  }
}

