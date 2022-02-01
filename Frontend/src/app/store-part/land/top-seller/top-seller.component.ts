import { Book } from '../../../models/book.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'land-top-seller',
  templateUrl: './top-seller.component.html',
  styleUrls: ['./top-seller.component.scss'],
})
export class TopSellerComponent implements OnInit {
  books: Book[] = [
    {
      id: '',
      name: 'Book 3',
      author: 'mohamed ahmed',
      price: 55.0,
      rate: 5,
      noOfReviews: 2,
      description: 'very good book',
      publisher: 'moemen said',
      publicationDate: Date.now(),
      language: 'Arabic',
      imgLink: '/assets/images/books/3.webp',
      haveDiscount: true,
      discount: 25,
      priceAfterDiscount: 40,
    },
    {
      id: '',
      name: 'Book 2',
      author: 'marwan mohamed',
      price: 55.0,
      rate: 5,
      noOfReviews: 2,
      description: 'very good book',
      publisher: 'moemen said',
      publicationDate: Date.now(),
      language: 'Arabic',
      imgLink: '/assets/images/books/2.webp',
      haveDiscount: true,
      discount: 8,
      priceAfterDiscount: 50,
    },
    {
      id: '',
      name: 'Book 5',
      author: 'mohamed said',
      price: 55.0,
      rate: 5,
      noOfReviews: 2,
      description: 'very good book',
      publisher: 'moemen said',
      publicationDate: Date.now(),
      language: 'Arabic',
      imgLink: '/assets/images/books/5.webp',
      haveDiscount: false,
    },
    {
      id: '',
      name: 'Book 1',
      author: 'moemen said',
      price: 55.0,
      rate: 5,
      noOfReviews: 2,
      description: 'very good book',
      publisher: 'moemen said',
      publicationDate: Date.now(),
      language: 'Arabic',
      imgLink: '/assets/images/books/1.webp',
      haveDiscount: false,
    },
  ];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.http.get('http://localhost:3000/books').subscribe((res: Book[])=> {
    //   this.books = res;
    // })
  }
}
