import { Injectable } from '@angular/core';
import { books } from "../data/book";
import {Book} from "../models/book";
import {IBook} from "../models/IBook";

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor() { }

  // getBooks(): Book[] {
  getBooks(): IBook[] {
    return books;
  }
}
