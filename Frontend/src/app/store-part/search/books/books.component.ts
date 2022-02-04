import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';

import { Book } from 'src/app/models/book.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'searched-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  constructor(
    private sharedService: SharedService,
    private render: Renderer2
  ) {}
  books = this.sharedService.books;
  @ViewChild('booksRow') booksRow;

  ngOnInit(): void {
    this.sharedService.bookStyleView.pipe().subscribe((res) => {
      if (res) {
        this.render.removeClass(this.booksRow.nativeElement, 'booksListRow');
      } else {
        this.render.addClass(this.booksRow.nativeElement, 'booksListRow')
      }
    });
  }
}
