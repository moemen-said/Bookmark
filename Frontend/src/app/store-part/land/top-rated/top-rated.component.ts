import { Book } from '../../../models/book.model';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'land-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {

  constructor(private sharedService: SharedService) {}
  books = this.sharedService.books;

  ngOnInit(): void {
  }

}
