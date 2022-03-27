import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/books.service';

@Component({
  selector: 'store-profile-books',
  templateUrl: './profile-books.component.html',
  styleUrls: ['./profile-books.component.scss']
})
export class ProfileBooksComponent implements OnInit {
  constructor(private bookService: BookService) {}
  books = null;

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((res) => {
      this.books = res.books;
    });
  }
}
