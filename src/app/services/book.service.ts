import { Injectable } from '@angular/core';
import { books } from "../data/book";
import {Book} from "../models/book";
import {IBook} from "../models/IBook";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(): Promise<IBook[]> {
    return this.http.get<IBook[]>('http://loca....').toPromise();
  }
}
