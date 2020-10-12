import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LandComponent } from './land.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { TopSellerComponent } from './top-seller/top-seller.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    LandComponent,
    TopRatedComponent,
    TopSellerComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
  ]
})
export class LandModule { }
