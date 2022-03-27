import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandModule } from './land/land.module';
import { AuthorModule } from './author/author.module';
import { SharedModule } from '../shared/shared.module';
import { StorePartRoutingModule } from './store-part-routing.module'

import { StoreComponent } from './store-part.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { RelatedBooksComponent } from './book/related-books/related-books.component';
import { BookReviewComponent } from './book/book-review/book-review.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProfileComponent } from './profile/profile.component';
import { LibraryComponent } from './library/library.component';
import { ProfileDataComponent } from './profile/profile-data/profile-data.component';
import { ProfileBooksComponent } from './profile/profile-books/profile-books.component';
import { ProfileBlogsComponent } from './profile/profile-blogs/profile-blogs.component';
import { ProfileMainDataComponent } from './profile/profile-main-data/profile-main-data.component'





@NgModule({
  declarations: [
    StoreComponent,
    BookComponent,
    BookDetailsComponent,
    RelatedBooksComponent,
    BookReviewComponent,
    CartComponent,
    CheckoutComponent,
    ProfileComponent,
    LibraryComponent,
    ProfileDataComponent,
    ProfileBooksComponent,
    ProfileBlogsComponent,
    ProfileMainDataComponent
  ],
  imports: [
    CommonModule,
    StorePartRoutingModule,
    SharedModule,
    LandModule,
    AuthorModule,
  ]
})
export class StorePartModule { }
