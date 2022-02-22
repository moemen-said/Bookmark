import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { Book } from 'src/app/models/book.model';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnChanges, OnInit, OnDestroy {
  @Input() bookData: Book;
  bookStatus: { isInCart: boolean; text: string } = {
    isInCart: false,
    text: 'Add To Cart',
  };
  isBookToggling = false;
  bookRemovingSubscriptoin: Subscription = null;

  constructor(
    private cartService: CartService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    // for handling delete book from cart and respond in bookDetails Component
    this.bookRemovingSubscriptoin =
      this.cartService.itemBookRemovedSubject.subscribe((bookId) => {
        bookId == this.bookData._id
          ? (this.bookStatus = { text: 'Add to cart', isInCart: false })
          : '';
      });
  }

  ngOnChanges(): void {
    if (this.cartService.isBookExistinCart(this.bookData)) {
      this.bookStatus = { text: 'Remove From Cart', isInCart: true };
    } else {
      this.bookStatus = { text: 'Add to cart', isInCart: false };
    }
  }

  ngOnDestroy(): void {
    this.bookRemovingSubscriptoin.unsubscribe();
  }

  toggleInCart() {
    this.isBookToggling = true;
    if (this.cartService.isBookExistinCart(this.bookData)) {
      this.cartService.removeFromCart(this.bookData).subscribe((res) => {
        if (res.success) {
          this.isBookToggling = false;
          this.bookStatus = { text: 'Add To Cart', isInCart: false };
          this.sharedService.snackBarShow.next(
            `${this.bookData.name} is removed from your cart`
          );
        } else {
          this.sharedService.snackBarShow.next(
            `something went wrong please try again later`
          );
        }
      });
    } else {
      this.cartService.addToCart(this.bookData).subscribe((res) => {
        this.isBookToggling = false;
        if (res.success) {
          this.bookStatus = { text: 'Remove From Cart', isInCart: true };
          this.sharedService.snackBarShow.next(
            `${this.bookData.name} is added successfuly to your cart`
          );
        } else {
          this.sharedService.snackBarShow.next(
            `something went wrong please try again later`
          );
        }
      });
    }
  }
}
