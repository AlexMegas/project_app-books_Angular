import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { IBook } from "../models/IBook";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public book: IBook = null;
  public userId = localStorage.getItem('userId');

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id)
      .then(res => {
        this.book = res.book;
      });
  }

  gotoItems() {
    this.router.navigate(['/books']);
  }

  editBook(id) {
    this.router.navigate(['/book/edit', id]);
  }

}