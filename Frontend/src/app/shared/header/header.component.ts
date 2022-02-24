import { Component, ViewChild, Renderer2, OnInit } from '@angular/core';
import { timeStamp } from 'console';
import { throwError } from 'rxjs';
import { take } from 'rxjs/operators';

import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('menuTogglerBtnDiv', { static: true }) menuTogglerBtnDiv;
  isCartShown: boolean = false;
  isSearchShown: boolean = false;
  isAccountMobOptionsShown: boolean = false;
  isAccountDeskOptionsShown: boolean = false;
  isUserAuthenticated = false;
  user: User = null;
  cartItemNo = 0;

  constructor(
    private authService: AuthService,
    private sharedService: SharedService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    //for toggle drop down menus
    this.sharedService.ddToggle.subscribe((componentName) => {
      if (componentName == 'cart') this.toggleCart();
      else if (componentName == 'search') this.toggleSearch();
      else if (componentName == 'accountDeskVer')
        this.toggleAccountDeskOption();
      else if (componentName == 'accountMobVer') this.toggleAccountMobOption();
    });

    //for closing nav when click outside it
    this.sharedService.navToggle.subscribe(() => this.closeMenuOnClick());

    //for getting user data if he/she logged in
    this.user = this.authService.getuserData();
    this.isUserAuthenticated = this.authService.getIsAuth(); //for auto login method fix
    this.authService.getAuthStateListner().subscribe((authState) => {
      this.isUserAuthenticated = authState;
      this.user = this.authService.getuserData();
      this.cartItemNo = this.cartService.itemCounter =
        this.cartService.countItemsInCart();
    });

    //for cart
    this.cartItemNo = this.cartService.itemCounter =
      this.cartService.countItemsInCart();
    this.cartService.itemCounterSubject.subscribe(
      (count) => (this.cartItemNo = count)
    );
  }

  toggleCart() {
    this.isCartShown = !this.isCartShown;
  }

  toggleSearch() {
    this.isSearchShown = !this.isSearchShown;
  }

  toggleAccountMobOption() {
    this.isAccountMobOptionsShown = !this.isAccountMobOptionsShown;
  }

  toggleAccountDeskOption() {
    this.isAccountDeskOptionsShown = !this.isAccountDeskOptionsShown;
  }

  closeMenuOnClick() {
    if (window.outerWidth < 768) {
      this.menuTogglerBtnDiv.nativeElement.click();
    }
  }

  onLogout() {
    this.authService.logout();
  }
}
