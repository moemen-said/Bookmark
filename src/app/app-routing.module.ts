import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: './store-part/store-part.module#StorePartModule',
    data: { animationState: 'store' }
  },
  {
    path: 'Account',
    loadChildren: './auth-part/auth-part.module#AuthModule',
    data: { animationState: 'signin' }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
