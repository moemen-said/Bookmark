import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'serachDropDown',
  templateUrl: './serach.component.html',
  styleUrls: ['./serach.component.scss']
})
export class SerachComponent implements OnInit {

  seachedItemsShown: boolean = false;
  @ViewChild('outerSearch') outerSearch;

  constructor(private sharedService: SharedService) {
    this.sharedService.ddToggle.subscribe((componentName) => {
      if (componentName == 'search') {
        this.seachedItemsShown = false;
      }
    })
  }

  ngOnInit(): void {
  }

  search(input: HTMLInputElement) {
    input.value.trim() !== '' ?
      this.seachedItemsShown = true :
      this.seachedItemsShown = false;
  }

  toggleSearchedDiv() {
    this.seachedItemsShown = !this.seachedItemsShown
  }

}
