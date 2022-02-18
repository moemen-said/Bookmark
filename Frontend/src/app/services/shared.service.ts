import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  ddToggle = new Subject<string>();
  navToggle = new Subject();
  serachFilter = new Subject<boolean>();
  bookStyleView = new Subject<boolean>();
  snackBarShow = new Subject<string>();

  constructor() {}
}
