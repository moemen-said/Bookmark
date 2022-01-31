import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  isSortMenuShown = false;

  constructor(private sharedService:SharedService) {}

  ngOnInit(): void {
    this.sharedService.ddToggle.pipe().subscribe(()=>this.toggleSortMenu())
  }

  toggleSortMenu(){
    this.isSortMenuShown = !this.isSortMenuShown;
  }
}
