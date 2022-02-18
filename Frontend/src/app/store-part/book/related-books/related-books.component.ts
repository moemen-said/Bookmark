import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/books.service';

@Component({
  selector: 'related-books',
  templateUrl: './related-books.component.html',
  styleUrls: ['./related-books.component.scss'],
})
export class RelatedBooksComponent implements OnInit {
  books: Book[] = null;
  
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((res) => {
      this.books = res.books;
    });
  }
}
