import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { IBook } from "../models/IBook";
import { element } from 'protractor';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  public books: IBook[] = [];
  public userId = localStorage.getItem('userId');

  ngOnInit() {
    this.bookService.getBooks()
      .then(res => {
        this.books = res.books
      });
  }

  navigateToBook(id) {
    this.router.navigate(['/book', id]);
  }

  delBook(id) {
    this.bookService.deleteBook(id)
      .then(res => {
        console.log(res)
      });
  }

  navigateToAuthor(author) {
    this.router.navigate(['/book'], { queryParams: { author: author } });
  }

  navigateToAddNewBook() {
    this.router.navigate(['/book/new'])
  }

}