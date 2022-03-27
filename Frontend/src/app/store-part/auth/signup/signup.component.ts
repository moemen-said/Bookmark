import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  errOccurred = false;
  errMsg = '';
  isLoading: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSignUp(form: NgForm) {
    if (form.invalid) return;
    this.isLoading = true;
    this.authService
      .signup(
        form.value.type,
        form.value.email,
        form.value.password,
        form.value.name
      )
      .subscribe(
        (res) => {
          if (res.success) {
            this.authService
              .login(form.value.email, form.value.password)
              .subscribe((res) => {
                const token = res.token;
                if (token && res.success) {
                  this.router.navigate(['/']);
                }
              });
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
