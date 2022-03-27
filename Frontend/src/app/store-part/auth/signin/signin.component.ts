import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  errOccurred = false;
  errMsg = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {
    if (this.authService.getIsAuth()) this.router.navigate(['/']);
  }

  onLogin(loginForm: NgForm) {
    if (loginForm.invalid) return;
    this.isLoading = true;
    this.authService
      .login(loginForm.value.email, loginForm.value.password)
      .subscribe(
        (res) => {
          const token = res.token;
          if (token && res.success) {
            this.router.navigate(['/']);
          }
        },
        (err) => {
          this.isLoading = false;
          this.errOccurred = true;
          this.errMsg = err.error.message;
          setTimeout(() => {
            this.errOccurred = false;
            this.errMsg = '';
          }, 5000);
        }
      );
  }
}
