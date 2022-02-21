export interface Book {
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
  rate?: number;
  noOfReviews?: number;
  usersReview?: [bookReview];
  imgLink: string;
}

export interface bookReview {
  reviewerId: string;
  reviewerName: string;
  reviewerImgLink: string;
  reviewRate: number;
  reviewText: string;
  date?: string;
}

export interface category {
  _id: string;
  name: string;
  description?: string;
}

export interface bookCart {
  _id: string;
  bookName: string;
  authorName: string;
  imgLink: string;
  price: number;
  haveDiscount: boolean;
  discount?: number;
  priceAfterDiscount?: number;
}
