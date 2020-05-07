import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BookService } from '../services/book.service';
import { IBook } from "../models/IBook";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router) { }

  public book: IBook;

  ngOnInit() {

    let author = this.route.snapshot.queryParamMap.get('author');
    this.bookService.getBookByQuery(author)
      .then(res => {
        this.book = res.book;
      });

  };

  gotoItems() {
    this.router.navigate(['/books']);
  }

}
