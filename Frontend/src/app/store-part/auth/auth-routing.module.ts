import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordResetComponent } from './password-reset/password-reset.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NewPasswordComponent } from './new-password/new-password.component';

const authRoutes: Routes = [
      { path: '', component: SigninComponent, data: { animationState: 'signin' } },
      {
        path: 'signin',
        component: SigninComponent,
        data: { animationState: 'signin' },
      },
      {
        path: 'signup',
        component: SignupComponent,
        data: { animationState: 'signup' },
      },
      {
        path: 'passwordReset',
        component: PasswordResetComponent,
        data: { animationState: 'passReset' },
      },
      {
        path: 'newPassword/:resetToken',
        component: NewPasswordComponent,
        data: { animationState: 'newPass' },
      }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
