import { Book } from '../../../models/book.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'land-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {

  books: Book[] = [
    {
      id: '', name: 'Book 4', author: 'moemen said', price: 55.00, rate: 5,noOfReviews:2, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/4.jpg', haveDiscount: false
    },
    {
      id: '', name: 'Book 3', author: 'mohamed ahmed', price: 55.00, rate: 5,noOfReviews:2, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/3.jpg', haveDiscount: true, discount: 25, priceAfterDiscount: 40
    },
    {
      id: '', name: 'Book 2', author: 'marwan mohamed', price: 55.00, rate: 5,noOfReviews:2, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/2.jpg', haveDiscount: true, discount: 8, priceAfterDiscount: 50
    },
    {
      id: '', name: 'Book 5', author: 'mohamed said', price: 55.00, rate: 5,noOfReviews:2, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/5.jpg', haveDiscount: false
    }
    , {
      id: '', name: 'Book 1', author: 'moemen said', price: 55.00, rate: 5,noOfReviews:2, description: 'very good book', publisher: 'moemen said', publicationDate: Date.now(), language: 'Arabic', imgLink: '/assets/images/books/1.jpg', haveDiscount: false
    }
  ]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get('http://localhost:3000/books').subscribe((res: Book[])=> {
    //   this.books = res;
    // })
  }

}
