import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/books.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'searched-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[] = null;
  @ViewChild('booksRow') booksRow;
  
  constructor(
    private sharedService: SharedService,
    private bookService: BookService,
    private render: Renderer2
  ) {}
  

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((res) => {
      this.books = res.books;
    });

    this.sharedService.bookStyleView.pipe().subscribe((res) => {
      if (res) {
        this.render.removeClass(this.booksRow.nativeElement, 'booksListRow');
      } else {
        this.render.addClass(this.booksRow.nativeElement, 'booksListRow');
      }
    });
  }
}
