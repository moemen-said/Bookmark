import {
  Component,
  ViewChild,
  Renderer2,
} from '@angular/core';
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

  constructor(private render: Renderer2, private sharedService: SharedService) {
    this.sharedService.ddToggle.pipe().subscribe((componentName) => {
      if (componentName == 'cart') this.toggleCart();
      else if (componentName == 'search') this.toggleSearch();
    });
    this.sharedService.navToggle.pipe().subscribe(() => this.closeMenuOnClick());
  }

  toggleCart() {
    this.isCartShown = !this.isCartShown;
  }

  toggleSearch() {
    this.isSearchShown = !this.isSearchShown;
  }

  closeMenuOnClick() {
    if (window.outerWidth < 768) {
      this.menuTogglerBtnDiv.nativeElement.click();
    }
  }
}
