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



@NgModule({
  declarations: [
    LoadingComponent,
    NotFoundComponent,
    FooterComponent,
    HeaderComponent,
    SerachComponent,
    ToggleActiveDirective,
    StickyOnTopDirective,
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
    StickyOnTopDirective
  ]
})
export class SharedModule { }
