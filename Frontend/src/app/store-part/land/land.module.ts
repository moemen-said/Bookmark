import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { LandComponent } from './land.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { TopSellerComponent } from './top-seller/top-seller.component';
import { CarouselComponent } from './carousel/carousel.component';
import { OffersComponent } from './offers/offers.component';



@NgModule({
  declarations: [
    LandComponent,
    TopRatedComponent,
    TopSellerComponent,
    CarouselComponent,
    OffersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
  ]
})
export class LandModule { }
