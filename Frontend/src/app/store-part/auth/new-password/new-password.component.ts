import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
})
export class NewPasswordComponent implements OnInit {
  resetToken = '';
  userId = '';
  isPassResetted = false;
  counter = 5;
  countDownInterval;
  isPassMismatch = false;
  isErrorOccured = false;
  message ='';
  @ViewChild('firstPassword') firstPassword;
  @ViewChild('secondPassword') secondPassword;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.resetToken = this.route.snapshot.params.resetToken;
    this.userId = this.route.snapshot.queryParams.id;
  }

  checkPass() {
    this.isPassMismatch =
      this.secondPassword.value != this.firstPassword.value ? true : false;
  }

  onReset(form: NgForm) {
    if (form.invalid) return;
    const firstPass = form.value.firstPassword;
    const secondPass = form.value.secondPassword;
    if (firstPass == secondPass) {
      this.authService
        .newPassword(this.userId, firstPass, this.resetToken)
        .subscribe((res) => {
          res.success ? this.successAnimation() : '';
        },err=>{
          this.isErrorOccured = true;
        this.message = err.error.message;
        setTimeout(() => {
          this.message = '';
          this.isErrorOccured = false;
          this.router.navigate(['/Account/passwordReset'])
        }, 5000);
        });
    }
  }



  successAnimation() {
    this.isPassResetted = true;
    this.countDownInterval = setInterval(() => {
      if (this.counter == 0) {
        clearInterval(this.countDownInterval);
        this.router.navigate(['/Account/signin']);
      }
      this.counter = --this.counter;
    }, 1000);
  }
}
