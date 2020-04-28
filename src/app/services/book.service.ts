import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor() { }

  getBooks() {
    return [
      {
        "author": "Author1", "title": "Title1", "publik": "2011-01-01",
        "pages": 111, "genre": "Genre1"
      },
      {
        "author": "Author2", "title": "Title2", "publik": "2012-02-02",
        "pages": 222, "genre": "Genre2"
      },
      {
        "author": "Author3", "title": "Title3", "publik": "2013-03-03",
        "pages": 333, "genre": "Genre3"
      },
      {
        "author": "Author4", "title": "Title4", "publik": "2014-04-04",
        "pages": 444, "genre": "Genre4"
      },
      {
        "author": "Author5", "title": "Title5", "publik": "2015-05-05",
        "pages": 555, "genre": "Genre5"
      }
    ];
  }
}
