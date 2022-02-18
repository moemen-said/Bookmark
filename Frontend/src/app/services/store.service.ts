import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Book } from '../models/book.model';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private apiUrl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) {}

  addToCart(book: Book) {
    return this.http.post<{ success: boolean }>(
      `${this.apiUrl}store/addToCart`,
      { book: book }
    );
  }
}
