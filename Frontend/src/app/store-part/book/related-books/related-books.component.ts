import { Component, OnInit } from '@angular/core';

import { Book } from 'src/app/models/book.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'related-books',
  templateUrl: './related-books.component.html',
  styleUrls: ['./related-books.component.scss']
})
export class RelatedBooksComponent implements OnInit {

  constructor(private sharedService:SharedService){  }
  books = this.sharedService.books

  ngOnInit(): void {
  }

}
