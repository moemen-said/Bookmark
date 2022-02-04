import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'land-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor(private sharedService:SharedService) { }
  books = this.sharedService.books;

  ngOnInit(): void {
  }

}
