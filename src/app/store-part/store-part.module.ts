import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandModule } from './land/land.module';
import { SharedModule } from '../shared/shared.module';
import { StorePartRoutingModule } from './store-part-routing.module'
import { StoreComponent } from './store-part.component'





@NgModule({
  declarations: [
    StoreComponent
  ],
  imports: [
    CommonModule,
    StorePartRoutingModule,
    SharedModule,
    LandModule
  ]
})
export class StorePartModule { }
