import { Book } from './../../models/book.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'land-top-seller',
  templateUrl: './top-seller.component.html',
  styleUrls: ['./top-seller.component.scss']
})
export class TopSellerComponent implements OnInit {

  books: Book[] = [
    { id: '', name: 'Book 1', author: 'moemen said', price: 55.00, rate: 5, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '../../../assets/images/books/1.jpg' },
    { id: '', name: 'Book 2', author: 'marwan mohamed', price: 55.00, rate: 5, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '../../../assets/images/books/2.jpg' },
    { id: '', name: 'Book 3', author: 'mohamed ahmed', price: 55.00, rate: 5, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '../../../assets/images/books/3.jpg' },
    { id: '', name: 'Book 4', author: 'moemen said', price: 55.00, rate: 5, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '../../../assets/images/books/4.jpg' },
    { id: '', name: 'Book 5', author: 'mohamed said', price: 55.00, rate: 5, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '../../../assets/images/books/5.jpg' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
