import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorBooksComponent } from './author-books/author-books.component';
import { AuthorComponent } from './author.component';
import { OtherAuthorsComponent } from './other-authors/other-authors.component';
import { AuthorBookItemComponent } from './author-books/author-book-item/author-book-item.component';
import { OtherAuthorItemComponent } from './other-authors/other-author-item/other-author-item.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AuthorComponent,
    AuthorBooksComponent,
    OtherAuthorsComponent,
    AuthorBookItemComponent,
    OtherAuthorItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AuthorModule { }
