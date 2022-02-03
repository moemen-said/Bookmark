import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  @ViewChild('ddBtn') ddBtn;
  @ViewChild('dropDownMenu') dropDownMenu;
  isSortMenuShown = false;
  sortSelectionTitle = '';
  isGridView = true;

  constructor(
    private sharedService: SharedService,
    private render: Renderer2
  ) {}

  ngOnInit(): void {
    this.sharedService.ddToggle.pipe().subscribe((component) => {
      if(component == 'sort') this.toggleSortMenu()
    });
  }

  toggleSortMenu() {
    this.isSortMenuShown = !this.isSortMenuShown;
  }

  showFilter() {
    this.sharedService.serachFilter.next(true);
  }

  sortSelection(element) {
    this.toggleSortMenu();
    let selectedValue = element.target.dataset['value'];
    this.sortSelectionTitle = selectedValue;
    if (!this.ddBtn.nativeElement.classList.contains('selected')) {
      //to add selected class for first time
      this.render.addClass(this.ddBtn.nativeElement, 'selected');
    }
    //remove active class and add to selected one
    let dropDownItems = this.dropDownMenu.nativeElement.children;
    Array.from(dropDownItems).forEach((el: Element) => {
      this.render.removeClass(el.querySelector('a.dropdown-item'), 'active');
    });
    this.render.addClass(element.target, 'active');
  }

  changeShowStyle(viewState: boolean) {
    this.isGridView = viewState;
    this.sharedService.bookStyleView.next(viewState);
  }
}
