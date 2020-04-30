import { IBook } from "../models/IBook";

export const books: IBook[] = [
  {
    "author": "Author1", "title": "Title1", "publik": new Date("2011-01-01"),
    "pages": 111, "genre": "Genre1"
  },
  {
    "author": "Author2", "title": "Title2", "publik": new Date("2012-02-02"),
    "pages": 222, "genre": "Genre2"
  },
  {
    "author": "Author3", "title": "Title3", "publik": new Date("2013-03-03"),
    "pages": 333, "genre": "Genre3"
  },
  {
    "author": "Author4", "title": "Title4", "publik": new Date("2014-04-04"),
    "pages": 444, "genre": "Genre4"
  },
  {
    "author": "Author5", "title": "Title5", "publik": new Date("2015-05-05"),
    "pages": 555, "genre": "Genre5"
  }
];