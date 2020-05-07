import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../models/IBook';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.scss']
})
export class DeletebookComponent implements OnInit {

  constructor(private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router) { }

  public book: IBook = null;

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.bookService.deleteBook(id)
      .then(res => {
        console.log(res)
      });
  }

}
