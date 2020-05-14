import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { IBook } from "../models/IBook";
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books: IBook[] = [];
  public book: IBook = {
    author: '',
    title: '',
    publik: new Date('1970-01-01'),
    pages: 0,
    genre: ''
  };

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

  delBook(id) {
    this.bookService.deleteBook(id)
      .then(res => {
        console.log(res)
      });
  }

  navigateToAuthor(author) {
    this.router.navigate(['/book'], { queryParams: { author: author } });
  }

  addNewBook() {
    this.bookService.addBook(this.book)
      .then(res => console.log(res));
  }

}