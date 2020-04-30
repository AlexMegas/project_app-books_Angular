import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from '../services/book.service';
import { IBook } from "../models/IBook";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public book: IBook = null;

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');

    this.bookService.getBookById(id)
      .then(res => {
        this.book = res.book;
      });
  }

  gotoBack() {
    this.router.navigate(['/books']);
  }

}