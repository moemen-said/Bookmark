import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  ddToggle = new Subject<string>();
  navToggle = new Subject();
  serachFilter = new Subject<boolean>();
  bookStyleView = new Subject<boolean>();

  books: Book[] = [
    {
      _id: '61fc7e744d10fcb73ac84f8b',
      name: 'Book 4',
      authorId: '1',
      authorName: 'moemen said',
      imgLink: '/assets/images/books/4.webp',
      category: '1',
      isbn: '23168131648613186',
      language: 'English',
      datePublished: new Date('15/2/1198'),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: 50,
      haveDiscount: false,
      rate: 3,
      noOfReviews: 2,
      usersReview: [
        {
          reviewerId: '1',
          reviewerName: 'Moemen said',
          reviewerImgLink: '/assets/images/male1.jpg',
          reviewRate: 5,
          reviewText:
            'Lorem ipsum dolor sit amet exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      ],
    },
    {
      _id: '61fc804d4d10fcb73ac84f8e',
      name: 'Book 2',
      authorId: '2',
      authorName: 'moemen said',
      imgLink: '/assets/images/books/2.webp',
      category: '1',
      isbn: '23168131648613186',
      language: 'English',
      datePublished: new Date('15/2/1198'),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: 50,
      haveDiscount: false,
      rate: 3,
      noOfReviews: 2,
      usersReview: [
        {
          reviewerId: '1',
          reviewerName: 'Moemen said',
          reviewerImgLink: '/assets/images/male1.jpg',
          reviewRate: 5,
          reviewText:
            'Lorem ipsum dolor sit amet exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      ],
    },
    {
      _id: '61fc80764d10fcb73ac84f8f',
      name: 'Book 3',
      authorId: '1',
      authorName: 'moemen said',
      imgLink: '/assets/images/books/3.webp',
      category: '1',
      isbn: '23168131648613186',
      language: 'Arabic',
      datePublished: new Date('15/2/1198'),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: 50,
      haveDiscount: true,
      discount:10,
      priceAfterDiscount:45,
      rate: 3,
      noOfReviews: 2,
      usersReview: [
        {
          reviewerId: '1',
          reviewerName: 'Moemen said',
          reviewerImgLink: '/assets/images/male1.jpg',
          reviewRate: 5,
          reviewText:
            'Lorem ipsum dolor sit amet exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      ],
    },
    {
      _id: '61fc80c14d10fcb73ac84f90',
      name: 'Book 1',
      authorId: '1',
      authorName: 'moemen said',
      imgLink: '/assets/images/books/1.webp',
      category: '1',
      isbn: '23168131648613186',
      language: 'English',
      datePublished: new Date('15/2/1198'),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: 40,
      haveDiscount: true,
      discount:25,
      priceAfterDiscount:30,
      rate: 3,
      noOfReviews: 2,
      usersReview: [
        {
          reviewerId: '1',
          reviewerName: 'Moemen said',
          reviewerImgLink: '/assets/images/male1.jpg',
          reviewRate: 5,
          reviewText:
            'Lorem ipsum dolor sit amet exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      ],
    },
    {
      _id: '61fc80764d10fcb73ac84f8f',
      name: 'Book 5',
      authorId: '1',
      authorName: 'moemen said',
      imgLink: '/assets/images/books/5.webp',
      category: '1',
      isbn: '23168131648613186',
      language: 'English',
      datePublished: new Date('15/2/1198'),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      price: 50,
      haveDiscount: false,
      rate: 3,
      noOfReviews: 2,
      usersReview: [
        {
          reviewerId: '1',
          reviewerName: 'Moemen said',
          reviewerImgLink: '/assets/images/male1.jpg',
          reviewRate: 5,
          reviewText:
            'Lorem ipsum dolor sit amet exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
      ],
    },
  ];

  constructor() {}
}
