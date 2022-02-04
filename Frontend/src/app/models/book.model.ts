export class Book {
  _id: string;
  name: string;
  authorId: string;
  authorName: string;
  category: string;
  isbn?: string;
  language: string;
  datePublished: Date;
  description: string;
  price: number;
  haveDiscount: boolean;
  discount?: number;
  priceAfterDiscount?: number;
  rate: number;
  noOfReviews?: number;
  usersReview?: [bookReview];
  imgLink: string;
}

export class bookReview {
  reviewerId: string;
  reviewerName: string;
  reviewerImgLink: string;
  reviewRate: number;
  reviewText: string;
  date?: string;
}

export class category {
  _id: string;
  name: string;
  description?: string;
}
