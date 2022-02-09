import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  constructor(private authService: AuthService, private router: Router) {
    if (this.authService.getIsAuth()) this.router.navigate(['/']);
  }

  onLogin(loginForm: NgForm) {
    if (loginForm.invalid) return;
    this.authService.login(loginForm.value.email, loginForm.value.password);
  }
}
