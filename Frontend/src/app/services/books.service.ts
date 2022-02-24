import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
    
    // private apiUrl = 'http://localhost:3000/api/';
    private apiUrl = 'https://bookmark-store-app.herokuapp.com/api/';


    constructor(private http:HttpClient){}

    getAllBooks(){
        return this.http.get<{success:boolean,books:Book[]}>(`${this.apiUrl}store/books`)
    }

    getBookDetails(bookId:string){
        return this.http.get<{success:boolean,book:Book}>(`${this.apiUrl}store/books/${bookId}`)
    }

}