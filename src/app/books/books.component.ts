import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

import { IBook } from "../models/IBook";
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books: IBook[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBookById()
      .then(res => {
        this.books = res.books;
      });

    //   this.bookService.getBooks()
    //     .then(res => {
    //       this.books = res.books;
    //     });
  }

}
