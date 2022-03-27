import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/books.service';

@Component({
  selector: 'related-books',
  templateUrl: './related-books.component.html',
  styleUrls: ['./related-books.component.scss'],
})
export class RelatedBooksComponent implements OnInit {
  books: Book[] = null;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((res) => {
      this.books = res.books;
    });
  }

  routing(bookId) {
    window.scroll({
      top: 0,
      behavior: 'smooth', // 👈
    });
    setTimeout(() => this.router.navigate(['Book/', bookId]), 500);
  }
}
