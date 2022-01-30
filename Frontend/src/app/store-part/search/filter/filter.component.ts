import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  formatLabel(value: number) {
    return value + '$';
  }
}
