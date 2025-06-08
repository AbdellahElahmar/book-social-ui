import { Component } from '@angular/core';
import {RegistrationRequest} from "../../core/models/registration-request";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../core/services/authentication.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  registerRequest: RegistrationRequest = {firstname: '', lastname: '', email: '', password: ''};

  errorMsg: string[] = []

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  register() {
    this.authService.register({
      body: this.registerRequest
    })
      .subscribe({
        next: () => {
          this.router.navigate(['activate-account'])
        },
        error: (err) => {
          this.errorMsg = err.errors.formatValidationErrors
        }
      })


  }

  login() {
    this.router.navigate(['login'])
  }

}
