export class Book {
    id: string;
    name: string;
    authorID?: string;
    author: string;
    price: number;
    rate: number;
    description: string;
    publisher: string;
    publicationDate: number;
    language: string
    imgLink: string;
    pageLenght?: string;
    noOfSell?: number;
    noOfReviews:number;
    haveDiscount?: boolean;
    discount?: number;
    priceAfterDiscount?: number;
}

export class bookReview {
    bookId: string;
    reviewerId: string;
    reviewer: string;
    reviewerImgLink: string;
    review: string;
    date: string;
    reviewRate: number;
} 