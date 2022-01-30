import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'related-books',
  templateUrl: './related-books.component.html',
  styleUrls: ['./related-books.component.scss']
})
export class RelatedBooksComponent implements OnInit {

  books: Book[] = [
    { id: '', name: 'Book 1', author: 'moemen said', price: 15.00, rate: 5, noOfReviews: 2, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/1.webp', haveDiscount: false },
    { id: '', name: 'Book 4', author: 'moemen said', price: 20.00, rate: 5, noOfReviews: 2, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/4.webp', haveDiscount: false },
    { id: '', name: 'Book 5', author: 'mohamed said', price: 18.30, rate: 5, noOfReviews: 2, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/5.webp', haveDiscount: false },
    { id: '', name: 'Book 3', author: 'mohamed ahmed', price: 55.00, rate: 5, noOfReviews: 2, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/3.webp', haveDiscount: true, discount: 25, priceAfterDiscount: 40 },
    { id: '', name: 'Book 2', author: 'marwan mohamed', price: 55.00, rate: 5, noOfReviews: 2, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/2.webp', haveDiscount: true, discount: 8, priceAfterDiscount: 50 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
