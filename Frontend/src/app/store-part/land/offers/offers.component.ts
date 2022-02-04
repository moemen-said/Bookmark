import { Book } from '../../../models/book.model';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'land-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  constructor(private sharedService: SharedService) {}
  books = this.sharedService.books;

  ngOnInit(): void {}
}
