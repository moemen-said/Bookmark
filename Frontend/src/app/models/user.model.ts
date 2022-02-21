export interface User {
  _id: string;
  type: string;
  name: string;
  email: string;
  bio?: string;
  boughtBooks?: [string];
  ownedBooks?: [string];
  cart: Cart;
}

export interface Cart {
  totalPrice: number;
  books: [
    {
      bookId: string;
      price: number;
      haveDiscount: boolean;
      discount?: number;
      priceAfterDiscount?: number;
    }
  ];
}
