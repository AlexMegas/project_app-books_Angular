import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IBook } from "../models/IBook";
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  url: string = 'http://localhost:4200/book/';
  public books: IBook[] = [];

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit() {
    this.bookService.getBooks()
      .then(res => {
        this.books = res.books;
      });
  }

  navigateToBook(id) {
    this.router.navigate(['/book', id]);
  }

}