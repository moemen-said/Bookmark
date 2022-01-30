import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './loading/loading.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SerachComponent } from './header/serach/serach.component';
import { ToggleActiveDirective } from '.././directives/toggle-active.directive';
import { ShowOnScrollDirective } from '.././directives/sticky-on-top.directive';
import { CartComponent } from './header/cart/cart.component';
import { SearchItemComponent } from './header/serach/search-item/search-item.component';
import { CartItemComponent } from './header/cart/cart-item/cart-item.component';
import {DdHideDirective } from '../directives/dd-hide.directive'
import { ToggleNavDirective } from '../directives/toggle-nav.directive';
import { RateStarsComponent } from './rate-stars/rate-stars.component';


@NgModule({
  declarations: [
    LoadingComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    SerachComponent,
    ToggleActiveDirective,
    ShowOnScrollDirective,
    CartComponent,
    SearchItemComponent,
    CartItemComponent,
    DdHideDirective,
    ToggleNavDirective,
    RateStarsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LoadingComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ToggleActiveDirective,
    ShowOnScrollDirective,
    DdHideDirective,
    ToggleNavDirective,
    RateStarsComponent
  ]
})
export class SharedModule { }