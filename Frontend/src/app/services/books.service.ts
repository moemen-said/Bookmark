import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Book } from '../models/book.model';

import { user } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class BookService {

    constructor(private http:HttpClient){}

    getBookDetails(bookId:string){
        return this.http.get<{success:boolean,book:Book}>(`https://bookmark-store-app.herokuapp.com/api/store/books/${bookId}`)
    }

}