export class user {
  _id: string;
  type: string;
  name: string;
  email: string;
  bio?: string;
  boughtBooks?: [string];
  ownedBooks?: [string];
  cart: cart;
}

export class cart {
  totalPrice: number;
  haveDiscount:boolean;
  discount?:number;
  priceAfterDiscount?:number;
  books?: [string];
}
