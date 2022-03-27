import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book = null;
  @Input() showAuthor:boolean = true;
  @Input() minimize:boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
