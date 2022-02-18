import { Component, OnInit } from '@angular/core';

import { BookService } from 'src/app/services/books.service';

@Component({
  selector: 'land-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  books = null;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((res) => {
      this.books = res.books;
    });
  }
}
