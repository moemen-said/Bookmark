import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';

import { ToggleActiveDirective } from '.././directives/toggle-active.directive';
import {DdHideDirective } from '../directives/dd-hide.directive'
import { ShowOnScrollDirective } from '.././directives/sticky-on-top.directive';
import { ToggleNavDirective } from '../directives/toggle-nav.directive';
import { ToggleEditDirective } from '../directives/toggle-edit.directive';

import { LoadingComponent } from './loading/loading.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SerachComponent } from './header/serach/serach.component';
import { CartComponent } from './header/cart/cart.component';
import { SearchItemComponent } from './header/serach/search-item/search-item.component';
import { CartItemComponent } from './header/cart/cart-item/cart-item.component';
import { RateStarsComponent } from './rate-stars/rate-stars.component';
import { BookItemComponent } from './book-item/book-item.component';


@NgModule({
  declarations: [
    LoadingComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    SerachComponent,
    ToggleActiveDirective,
    ToggleEditDirective,
    ShowOnScrollDirective,
    CartComponent,
    SearchItemComponent,
    CartItemComponent,
    DdHideDirective,
    ToggleNavDirective,
    RateStarsComponent,
    BookItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSliderModule,
  ],
  exports: [
    MatSliderModule,
    LoadingComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    ToggleEditDirective,
    ToggleActiveDirective,
    ShowOnScrollDirective,
    DdHideDirective,
    ToggleNavDirective,
    RateStarsComponent,
    BookItemComponent,
  ]
})
export class SharedModule { }
