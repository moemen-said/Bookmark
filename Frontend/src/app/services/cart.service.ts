import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Book, bookCart } from '../models/book.model';
import { AuthService } from './auth.service';
import { Cart } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiUrl = 'http://localhost:3000/api/';
  public itemCounter = 0;
  public itemCounterSubject = new Subject<number>();

  constructor(private http: HttpClient, private authService: AuthService) {}

  countItemsInCart(): number {
    let counter = 0;
    if (this.authService.getIsAuth()) {
      counter = this.authService.getuserData().cart.books.length;
    } else {
      const cart = JSON.parse(localStorage.getItem('cart'));
      if (cart) {
        const books = cart.books;
        counter = books.length;
      } else {
        counter = 0;
      }
    }
    return counter;
  }

  getCart(): Book {
    if (this.authService.getIsAuth()) {
      const localstorageUser = JSON.parse(localStorage.getItem('user'));
      return localstorageUser.cart;
    } else {
      const localstorageCart = JSON.parse(localStorage.getItem('cart'));
      return localstorageCart;
    }
  }

  addToCart(book: Book) {
    // to menify Book object when adding to user cart
    book.usersReview = null;
    if (this.authService.getIsAuth()) {
      //if user is logged in
      return this.http
        .post<{ success: boolean; cart: Cart }>(
          `${this.apiUrl}store/addToCart`,
          {
            book: book,
          }
        )
        .pipe(
          map((res) => {
            if (res.success) {
              this.updateAuthenticatedUserCart(res.cart);
              this.itemCounter = this.itemCounter + 1;
              this.itemCounterSubject.next(this.itemCounter);
              return res;
            }
            return res;
          })
        );
    } else {
      //for anonymous user
      return this.anonymousAddingToCartLocalStorage(book, () => {
        return new Observable((observer) => {
          this.itemCounter = this.itemCounter + 1;
          this.itemCounterSubject.next(this.itemCounter);
          observer.next({ success: true });
        });
      });
    }
  }

  removeFromCart(book: Book) {
    if (this.authService.getIsAuth()) {
      //if user is logged in
      return this.http
        .post<{ success: boolean; cart: Cart }>(
          `${this.apiUrl}store/removeFromCart`,
          {
            book: book,
          }
        )
        .pipe(
          map((res) => {
            if (res.success) {
              this.updateAuthenticatedUserCart(res.cart);
              this.itemCounter = this.itemCounter - 1;
              this.itemCounterSubject.next(this.itemCounter);
              return res;
            }
            return res;
          })
        );
    } else {
      //for anonymous user
      return this.anonymousRemovingFromCartLocalStorage(book, () => {
        return new Observable((observer) => {
          this.itemCounter = this.itemCounter - 1;
          this.itemCounterSubject.next(this.itemCounter);
          observer.next({ success: true });
        });
      });
    }
  }

  updateAuthenticatedUserCart(cart: Cart) {
    const localstorageUser = JSON.parse(localStorage.getItem('user'));
    localstorageUser.cart = cart;
    localStorage.setItem('user', JSON.stringify(localstorageUser));
  }

  anonymousAddingToCartLocalStorage(book: Book, cb: Function) {
    const localstorageCart = JSON.parse(localStorage.getItem('cart'));
    if (localstorageCart) {
      const previousTotalPrice = localstorageCart.totalPrice || 0;
      const books = localstorageCart.books || [];
      // books.push(this.bookInCartFormer(book));
      books.push(book);
      let cart = {
        books: books,
        totalPrice: 0,
      };
      if (book.haveDiscount) {
        cart.totalPrice = previousTotalPrice + book.priceAfterDiscount;
      } else {
        cart.totalPrice = previousTotalPrice + book.price;
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      let cart = {
        // books: [this.bookInCartFormer(book)],
        books: [book],
        totalPrice: book.price,
      };
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    return cb();
  }

  anonymousRemovingFromCartLocalStorage(
    removingBook: Book | bookCart,
    cb: Function
  ) {
    const localstorageCart = JSON.parse(localStorage.getItem('cart'));
    const previousTotalPrice = localstorageCart.totalPrice;
    let books = localstorageCart.books;
    books = books.filter((book) => book.bookId != removingBook._id);
    let cart = {
      books: books,
      totalPrice: 0,
    };
    if (removingBook.haveDiscount) {
      cart.totalPrice = previousTotalPrice - removingBook.priceAfterDiscount;
    } else {
      cart.totalPrice = previousTotalPrice - removingBook.price;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    return cb();
  }

  isBookExistinCart(book): boolean {
    if (!book) return;
    let isExist = false;
    if (this.authService.getIsAuth()) {
      const localstorageUser = JSON.parse(localStorage.getItem('user'));
      const localstorageCart = localstorageUser.cart;
      const books = localstorageCart.books;
      for (let i = 0; i < books.length; i++) {
        if (book._id == books[i]._id) {
          isExist = true;
          break;
        }
      }
      return isExist;
    } else {
      const localstorageCart = JSON.parse(localStorage.getItem('cart'));
      if (localstorageCart) {
        const books = localstorageCart.books;
        for (let i = 0; i < books.length; i++) {
          if (book._id == books[i]._id) {
            isExist = true;
            break;
          }
        }
      }
      return isExist;
    }
  }

  // bookInCartFormer(book: Book) {
  //   const BookInCart = {
  //     bookId: book._id,
  //     bookName:book.name,
  //     authorName:book.authorName,
  //     imgLink: book.imgLink,
  //     price: book.price,
  //     haveDiscount: book.haveDiscount,
  //     discount: book.discount,
  //     priceAfterDiscount: book.priceAfterDiscount,
  //   };
  //   return BookInCart;
  // }
}
