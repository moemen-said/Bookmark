import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './store-part.component';
import { LandComponent } from './land/land.component';


const storeRoutes: Routes = [
  {
    path: '', component: StoreComponent, children: [
      { path: '', component: LandComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(storeRoutes)],
  exports: [RouterModule]
})
export class StorePartRoutingModule { }
