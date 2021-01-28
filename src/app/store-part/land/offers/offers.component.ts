import { Book } from '../../../models/book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'land-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  books: Book[] = [
    { id: '', name: 'Book 4', author: 'moemen said', price: 55.00, rate: 5, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/4.jpg', discount: 15, priceAfterDiscount: 46.75 },
    { id: '', name: 'Book 3', author: 'mohamed ahmed', price: 55.00, rate: 5, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/3.jpg', discount: 25, priceAfterDiscount: 40 },
    { id: '', name: 'Book 2', author: 'marwan mohamed', price: 55.00, rate: 5, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/2.jpg', discount: 8, priceAfterDiscount: 50 },
    { id: '', name: 'Book 5', author: 'mohamed said', price: 55.00, rate: 5, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/5.jpg', discount: 10, priceAfterDiscount: 48.12 },
    { id: '', name: 'Book 1', author: 'moemen said', price: 55.00, rate: 5, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/1.jpg', discount: 20, priceAfterDiscount: 42.99 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
