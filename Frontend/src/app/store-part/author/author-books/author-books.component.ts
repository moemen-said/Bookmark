import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/books.service';

@Component({
  selector: 'author-books',
  templateUrl: './author-books.component.html',
  styleUrls: ['./author-books.component.scss'],
})
export class AuthorBooksComponent implements OnInit {
  constructor(private bookService: BookService) {}
  books: Book[] = null;

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((res) => {
      this.books = res.books;
    });
  }
}
