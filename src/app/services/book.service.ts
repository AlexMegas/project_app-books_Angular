import { Injectable } from '@angular/core';
import { IBook } from "../models/IBook";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8080/api/books/';
  bookId: string = '5e85a07dc218b46014ac3e03';

  getBookById(): Promise<{ books: IBook[] }> {
    return this.http.get<{ books: IBook[] }>(this.url + this.bookId).toPromise();
  }

  // getBooks(): Promise<{books: IBook[]}> {
  //   return this.http.get<{books: IBook[]}>(this.url).toPromise();
  // }

}