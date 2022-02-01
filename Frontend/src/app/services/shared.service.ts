import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  ddToggle = new Subject<string>();
  navToggle = new Subject();
  serachFilter = new Subject<boolean>();
  bookStyleView = new Subject<boolean>();

  constructor() {}
}
