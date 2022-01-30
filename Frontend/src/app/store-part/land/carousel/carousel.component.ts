import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'land-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  //for design only
  books = [
    { name: 'George Bellairs Death', price: '20.00', author: 'Moemen Said',rate:3,src:'/assets/images/books/1.jpg' },
    { name: 'The Hobbit', price: '15.00', author: 'Mohamed Ahmed',rate:4,src:'/assets/images/books/2.jpg' },
    { name: 'The Zolin Conspiracy', price: '29.99', author: 'Marwan Mohamed',rate:5,src:'/assets/images/books/3.jpg' },
    { name: 'Privacy', price: '80.00', author: 'Hessen Hassan',rate:2,src:'/assets/images/books/4.jpg' },
    { name: 'Sugar Run', price: '35.00', author: 'Adel Ahmed',rate:1,src:'/assets/images/books/5.jpg' }
  ]
  yNumber = [1, 2, 3]
  gNumber = [1, 2]

  constructor() { }

  ngOnInit(): void {
  }

}
