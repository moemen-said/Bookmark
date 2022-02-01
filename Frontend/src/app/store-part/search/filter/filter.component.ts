import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'search-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  isFilterShown = false;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.serachFilter
      .pipe()
      .subscribe((res) => (this.isFilterShown = res));
  }

  formatLabel(value: number) {
    return value + '$';
  }

  toggleFilter(state: boolean) {
    this.isFilterShown = state;
  }
}
