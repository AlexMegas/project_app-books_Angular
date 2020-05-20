import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/IBook';
import { BookService } from '../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public book: IBook;
  public id = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    this.bookService.getBookById(this.id)
      .then(res => this.book = res.book);
  }

  updBook() {
    this.bookService.updateBook(this.id, this.book)
      .then(res => console.log(res))
  }

  gotoItem() {
    this.router.navigate(['/book', this.id]);
  }

}