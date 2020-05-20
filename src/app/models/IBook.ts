export interface IBook {
  _id?: string;
  author: string;
  title: string;
  publik: Date;
  pages: number;
  genre: string;
  owner?: string
}
