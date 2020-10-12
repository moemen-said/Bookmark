import { LandComponent } from './land-part/land.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
  {
    path: '', component: LandComponent,
    data:{animationState:'land'}
  },
  {
    path: 'Account',
    loadChildren: './auth-part/auth-part.module#AuthModule',
    data: { animationState: 'signin' }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
