import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../core/services/authentication.service";

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent {

  message: string = '';
  isOkay: boolean = true;
  submitted: boolean = false

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  onCodeCompleted(token: any) {
    this.confirmAccount(token)

  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  private confirmAccount(token: any) {
    this.authService.confirm({
      token
    }).subscribe({
      next: () => {
        this.message = '      Your account has been successfully activated.\n';
        this.submitted = true
        this.isOkay = true
      },
    error: () => {
      this.message = '      The token has been expired.\n';
      this.isOkay = false
      this.submitted = true

    }
    })

  }
}
