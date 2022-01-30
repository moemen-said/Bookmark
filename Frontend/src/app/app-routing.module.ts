import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { AuthGuard } from './Guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./store-part/store-part.module').then(m => m.StorePartModule),
    data: { animationState: 'store' }
  },
  {
    path: 'Account',
    loadChildren: () => import('./store-part/auth/auth.module').then(m => m.AuthModule),
    data: { animationState: 'signin' },
    canActivate:[AuthGuard],
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: "top" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
