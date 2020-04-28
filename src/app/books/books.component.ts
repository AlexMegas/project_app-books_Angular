import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

import { Book } from '../models/book';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books = [];

  constructor(private _bookService: BookService) { }

  ngOnInit() {
    this.books = this._bookService.getBooks();
  }

}