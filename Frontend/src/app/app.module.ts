import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthModule } from './store-part/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { StorePartModule } from './store-part/store-part.module';

import { AuthInterceptor } from './store-part/auth/auth-interceptor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    AuthModule,
    StorePartModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,multi:true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
