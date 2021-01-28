import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.scss']
})
export class BookReviewComponent implements OnInit {

  @Input() bookId:number;

  constructor() { }

  ngOnInit(): void {
  }

}
