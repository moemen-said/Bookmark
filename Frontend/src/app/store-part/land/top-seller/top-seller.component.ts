import { Component, OnInit } from '@angular/core';

import { BookService } from 'src/app/services/books.service';

@Component({
  selector: 'land-top-seller',
  templateUrl: './top-seller.component.html',
  styleUrls: ['./top-seller.component.scss'],
})
export class TopSellerComponent implements OnInit {
  books = null;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((res) => {
      this.books = res.books;
    });
  }
}
