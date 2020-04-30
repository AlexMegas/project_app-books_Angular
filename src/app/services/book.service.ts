import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IBook } from "../models/IBook";

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8080/api/books/';
  bookId: string = '5e85a0b9c218b46014ac3e04';

  getBookById(id: string): Promise<{ book: IBook }> {
    return this.http.get<{ book: IBook }>(this.url + id).toPromise();
  }

  getBooks(): Promise<{books: IBook[]}> {
    return this.http.get<{books: IBook[]}>(this.url).toPromise();
  }

}