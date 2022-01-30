import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  book: Book =
    {
      id: '', name: 'Book 3', author: 'mohamed ahmed', price: 55.00, rate: 4,noOfReviews:3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/3.jpg', haveDiscount: true, discount: 25, priceAfterDiscount: 40
    }

  constructor() { }

  ngOnInit(): void {
  }

}
