import { Book } from '../../../models/book.model';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'land-top-seller',
  templateUrl: './top-seller.component.html',
  styleUrls: ['./top-seller.component.scss'],
})
export class TopSellerComponent implements OnInit {

  constructor(private sharedService: SharedService) {}
  books = this.sharedService.books;

  ngOnInit(): void {
  }
}
