import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SearchInputComponent } from './search-input/search-input.component';
import { FilterComponent } from './filter/filter.component';
import { BooksComponent } from './books/books.component';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    SearchComponent,
    SearchInputComponent,
    FilterComponent,
    BooksComponent,
  ],
  imports: [CommonModule, SearchRoutingModule, SharedModule],
})
export class SearchModule {}
