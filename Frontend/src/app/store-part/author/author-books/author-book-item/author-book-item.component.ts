import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'author-book-item',
  templateUrl: './author-book-item.component.html',
  styleUrls: ['./author-book-item.component.scss']
})
export class AuthorBookItemComponent implements OnInit {

  @Input() bookData:Book;

  constructor() { }

  ngOnInit(): void {
  }

}
