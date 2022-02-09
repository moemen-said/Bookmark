import { AfterContentInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  bookId: string = '';
  bookDetails?: Book = null;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params.id;
    this.bookService.getBookDetails(this.bookId).subscribe((res) => {
      if (res.success) {
        this.bookDetails = res.book;
      }
    });
  }
}
