import { Component, Input, OnInit } from '@angular/core';

import { Book } from 'src/app/models/book.model';
import { CartService } from 'src/app/services/cart.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() bookCartItem: Book;

  constructor(private cartService:CartService,private sharedService:SharedService) {}

  ngOnInit(): void {
  }

  deleteBook(){
    this.cartService.removeFromCart(this.bookCartItem).subscribe(res=>{
      if(res.success){
        this.sharedService.snackBarShow.next(`${this.bookCartItem.name} is removed from your cart`);
        this.cartService.itemBookRemovedSubject.next(this.bookCartItem._id);
      }
    })
  }
}
