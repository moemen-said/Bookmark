import { PasswordResetComponent } from './password-reset/password-reset.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth-part.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


const authRoutes: Routes = [
    {
        path: '', component: AuthComponent, children: [
            { path: '', component: SigninComponent, data: { animationState: 'signin' } },
            { path: 'signin', component: SigninComponent, data: { animationState: 'signin' } },
            { path: 'signup', component: SignupComponent, data: { animationState: 'signup' } },
            { path: 'passwordReset', component: PasswordResetComponent, data: { animationState: 'passReset' } }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]
})

export class AuthRoutingModule { }