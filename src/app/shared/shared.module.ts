import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SerachComponent } from './header/serach/serach.component';
import { ToggleActiveDirective } from '.././directives/toggle-active.directive';
import { StickyOnTopDirective } from '.././directives/sticky-on-top.directive';
import { CartComponent } from './header/cart/cart.component';
import { SearchItemComponent } from './header/serach/search-item/search-item.component';
import { CartItemComponent } from './header/cart/cart-item/cart-item.component';
import {DdHideDirective } from '../directives/dd-hide.directive'



@NgModule({
  declarations: [
    LoadingComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    SerachComponent,
    ToggleActiveDirective,
    StickyOnTopDirective,
    CartComponent,
    SearchItemComponent,
    CartItemComponent,
    DdHideDirective,
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
    StickyOnTopDirective,
    DdHideDirective,
  ]
})
export class SharedModule { }
