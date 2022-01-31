import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  isSortMenuShown = false;

  constructor() {}

  ngOnInit(): void {}

  toggleSortMenu(){
    this.isSortMenuShown = !this.isSortMenuShown;
  }
}
