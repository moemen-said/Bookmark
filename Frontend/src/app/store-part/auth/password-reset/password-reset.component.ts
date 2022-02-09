import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss'],
})
export class PasswordResetComponent {
  isSubmitted = false;
  // isResended = false;
  isErrorOccured = false;
  message = '';

  constructor(private authService: AuthService) {}

  onReset(form: NgForm) {
    if (form.invalid) return;
    this.authService.resetPassword(form.value.email).subscribe(
      (res) => {
        if (res.success) {
          this.isSubmitted = true;
        }
      },
      (err) => {
        this.isErrorOccured = true;
        this.message = err.error.message;
        setTimeout(() => {
          this.message = '';
          this.isErrorOccured = false;
        }, 5000);
      }
    );
  }

  // onResend() {
  //   this.isResended = true;
  //   setTimeout(() => (this.isResended = false), 2000);
  // }
}
