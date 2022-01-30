import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { BookComponent } from './book.component'
import { BookDetailsComponent } from './book-details/book-details.component'
import { BookReviewComponent } from './book-review/book-review.component'
import { RelatedBooksComponent } from './related-books/related-books.component';
import { BookReviewItemComponent } from './book-review/book-review-item/book-review-item.component';
import { RelatedBookItemComponent } from './related-books/related-book-item/related-book-item.component';




@NgModule({
  declarations: [
    BookComponent,
    BookDetailsComponent,
    BookReviewComponent,
    RelatedBooksComponent,
    BookReviewItemComponent,
    RelatedBookItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BookModule { }
