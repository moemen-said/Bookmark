import { Component, ViewChild, Renderer2 } from '@angular/core';
import { timeStamp } from 'console';

import { user } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @ViewChild('menuTogglerBtnDiv', { static: true }) menuTogglerBtnDiv;
  isCartShown: boolean = false;
  isSearchShown: boolean = false;
  isAccountMobOptionsShown: boolean = false;
  isAccountDeskOptionsShown: boolean = false;
  isUserAuthenticated = false;
  user: user = null;

  constructor(
    private authService: AuthService,
    private sharedService: SharedService
  ) {
    this.sharedService.ddToggle.pipe().subscribe((componentName) => {
      if (componentName == 'cart') this.toggleCart();
      else if (componentName == 'search') this.toggleSearch();
      else if (componentName == 'accountDeskVer') this.toggleAccountDeskOption();
      else if (componentName == 'accountMobVer') this.toggleAccountMobOption();
    });

    this.sharedService.navToggle
      .pipe()
      .subscribe(() => this.closeMenuOnClick());

    this.user = this.authService.getuserData();
    this.isUserAuthenticated = this.authService.getIsAuth(); //for auto login method fix
    this.authService.getAuthStateListner().pipe().subscribe((authState) => {
      this.isUserAuthenticated = authState;
      this.user = this.authService.getuserData();
    });
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
