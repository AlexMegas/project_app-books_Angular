import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IBook } from "../models/IBook";

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8080/api/books';
  public book: IBook;

  addBook(newBook): Promise<{ book: IBook }> {
    return this.http.post<{ book: IBook }>(`${this.url}`, newBook).toPromise();
  }

  getBookById(id: string): Promise<{ book: IBook }> {
    return this.http.get<{ book: IBook }>(`${this.url}/${id}`).toPromise();
  }

  getBookByQuery(author: string): Promise<{ book: IBook }> {
    return this.http.get<{ book: IBook }>(`${this.url}`, { params: { author: author } }).toPromise();
  }

  getBooks(): Promise<{ books: IBook[] }> {
    return this.http.get<{ books: IBook[] }>(`${this.url}`).toPromise();
  }

  deleteBook(id: string): Promise<any> {
    return this.http.delete<any>(`${this.url}/${id}`).toPromise();
  }

}