import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store-part.component';
import { LandComponent } from './land/land.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { ProfileComponent } from './profile/profile.component';

const storeRoutes: Routes = [
  {
    path: '',
    component: StoreComponent,
    children: [
      { path: '', component: LandComponent, data: { animationState: 'land' } },
      {
        path: 'Author',
        component: AuthorComponent,
        data: { animationState: 'author' },
      },
      {
        path: 'Profile/:userId',
        component: ProfileComponent,
        data: { animationState: 'profile' },
      },
      {
        path: 'Book/:id',
        component: BookComponent,
        data: { animationState: 'book' },
      },
      {
        path: 'Account',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
        data: { animationState: 'signin' },
      },
      {
        path: 'Search',
        loadChildren: () =>
          import('./search/search.module').then((m) => m.SearchModule),
        data: { animationState: 'search' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(storeRoutes)],
  exports: [RouterModule],
})
export class StorePartRoutingModule {}
