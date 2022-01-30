import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';

const searchRoutes: Routes = [
  {
    path: '',
    component: SearchComponent,
    data: { animationState: 'search' }
  },
]

@NgModule({
  imports: [RouterModule.forChild(searchRoutes)],
  exports: [RouterModule],
})

export class SearchRoutingModule {}
