import { SharedModule } from './../shared/shared.module';
import { AuthRoutingModule } from './auth-part-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth-part.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';


@NgModule({
  declarations: [
    AuthComponent,
    SigninComponent,
    SignupComponent,
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ]
})
export class AuthModule { }
