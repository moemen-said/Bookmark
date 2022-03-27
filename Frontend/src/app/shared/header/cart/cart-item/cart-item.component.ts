import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/books.service';
import { CartService } from 'src/app/services/cart.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() bookCartItem: string;
  bookData: Book = null;
  isDeleting = false;

  constructor(
    private cartService: CartService,
    private bookService: BookService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.bookService
      .getBookDetails(this.bookCartItem)
      .pipe(take(1))
      .subscribe((res) => {
        this.bookData = res.book;
      });
  }

  deleteBook() {
    this.isDeleting = true;
    this.cartService.removeFromCart(this.bookData).subscribe((res) => {
      if (res.success) {
        this.sharedService.snackBarShow.next(
          `${this.bookData.name} is removed from your cart`
        );
        this.cartService.itemBookRemovedSubject.next(this.bookData._id);
      } else {
        this.isDeleting = false;
        this.sharedService.snackBarShow.next(
          `Something went wrong please try again`
        );
      }
    });
  }
}
