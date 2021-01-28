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
import { BookReviewComponent } from './book/book-review/book-review.component'





@NgModule({
  declarations: [
    StoreComponent,
    BookComponent,
    BookDetailsComponent,
    RelatedBooksComponent,
    BookReviewComponent
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
