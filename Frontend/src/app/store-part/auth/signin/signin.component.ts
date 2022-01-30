import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  constructor(private authService: AuthService) {}

  onLogin(loginForm: NgForm) {
    if (loginForm.invalid) return;
    this.authService.userLogin(loginForm.value.email, loginForm.value.password);
  }
}
