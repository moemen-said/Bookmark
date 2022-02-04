import { Component, Input, OnInit } from '@angular/core';
import { Book, bookReview } from 'src/app/models/book.model';

@Component({
  selector: 'book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.scss']
})
export class BookReviewComponent implements OnInit {

  @Input() bookData: Book;
  bookReviews: bookReview[] = [
    {reviewerId:'',reviewerName:'Moemen Said',reviewerImgLink:'../../../../assets/images/male1.jpg',date:'7/3/2020',reviewRate:3,reviewText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'},
    {reviewerId:'',reviewerName:'Mohamed Said',reviewerImgLink:'../../../../assets/images/male3.jpg',date:'20/3/2020',reviewRate:4,reviewText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'},
    {reviewerId:'',reviewerName:'Marwan Said',reviewerImgLink:'../../../../assets/images/male2.jpg',date:'8/5/2020',reviewRate:5,reviewText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
