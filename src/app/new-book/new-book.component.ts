import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';
import { IBook } from '../models/IBook';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.scss']
})
export class NewBookComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  public book: IBook = {
    author: '',
    title: '',
    publik: new Date(),
    pages: 0,
    genre: ''
  };

  ngOnInit(): void {
  }

  addNewBook() {
    this.bookService.addBook(this.book)
      .then(res => console.log(res));
  }

  gotoItems() {
    this.router.navigate(['/books']);
  }

}