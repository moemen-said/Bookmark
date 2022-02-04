import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'author-books',
  templateUrl: './author-books.component.html',
  styleUrls: ['./author-books.component.scss']
})
export class AuthorBooksComponent implements OnInit {

  
  constructor(private sharedService:SharedService) { }
  
  books:Book[] = this.sharedService.books
  
  ngOnInit(): void {
  }

}
