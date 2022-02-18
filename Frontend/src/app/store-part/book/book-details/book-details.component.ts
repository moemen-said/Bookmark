import { Component, Input, OnInit } from '@angular/core';

import { Book } from 'src/app/models/book.model';
import { SharedService } from 'src/app/services/shared.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  @Input() bookData: Book;
  isBookAdding = false;

  constructor(private storeService: StoreService,private sharedService:SharedService) {}

  ngOnInit(): void {}

  onAddToCart() {
    this.isBookAdding = true;
    this.storeService.addToCart(this.bookData).subscribe((res) => {
      this.isBookAdding= false;
      if(res.success){
        this.sharedService.snackBarShow.next(`${this.bookData.name} added successfuly to your cart`)
      }
      else{
        this.sharedService.snackBarShow.next(`something went wrong please try again later`)
      }
    });
  }
}
