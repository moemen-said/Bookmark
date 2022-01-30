import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { LandComponent } from './land.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { TopSellerComponent } from './top-seller/top-seller.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TopSellerListItemComponent } from './top-seller/top-seller-item/top-seller-item.component';
import { OffersComponent } from './offers/offers.component';



@NgModule({
  declarations: [
    LandComponent,
    TopRatedComponent,
    TopSellerComponent,
    CarouselComponent,
    TopSellerListItemComponent,
    OffersComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
  ]
})
export class LandModule { }
