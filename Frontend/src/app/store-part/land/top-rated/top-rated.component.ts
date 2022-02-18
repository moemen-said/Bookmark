import { Component, OnInit } from '@angular/core';

import { BookService } from 'src/app/services/books.service';

@Component({
  selector: 'land-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
  constructor(private bookService: BookService) {}
  books = null;

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((res) => {
      this.books = res.books;
    });
  }

}
