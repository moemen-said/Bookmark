import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth-part/auth-part.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { StorePartModule } from './store-part/store-part.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    StorePartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
