import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart = null;

  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();

    this.authService.getAuthStateListner().subscribe((res) => {
      this.cart = this.cartService.getCart();
    });

    this.cartService.itemCounterSubject.subscribe(
      (count) => (this.cart = this.cartService.getCart())
    );
  }
}
