export class Book {
    id: string;
    name: string;
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
    discount?: number;
    priceAfterDiscount?:number;
}

export class bookReview {
    bookId: string;
    reviewerId: string;
    review: string;
    date: string;
    reviewRate: string;
} 