import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../../services/books.service';

export interface Book {
  name: string;
  image: string;
  price: number;
  author: string;
  year: number;
  link: string;
}

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  public books: Book[] = [
    {
      name: 'Harry Potter and the prisoner of azkaban',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81lAPl9Fl0L.jpg',
      price: 658,
      author: 'Joanne Rowling',
      year: 1999,
      link: 'https://www.chitai-gorod.ru/catalog/book/755578/',
    },
    {
      name: 'Бойцовский клуб',
      image: 'https://s1.livelib.ru/boocover/1000282867/200/2ae5/boocover.jpg',
      price: 525,
      author: 'Chuck Palahniuk',
      year: 1996,
      link: 'https://www.chitai-gorod.ru/catalog/book/2895858/',
    },
    {
      name: 'Преступление и наказание',
      image: 'https://cdn.img-gorod.ru/310x500/nomenclature/24/652/2465295.jpg',
      price: 240,
      author: 'Fyodor Dostoevsky',
      year: 1866,
      link: 'https://www.chitai-gorod.ru/catalog/book/827648/',
    }
  ]

  constructor(private router: Router, private booksService: BooksService) { }

  ngOnInit(): void {
  }

  public async openBook(book: Book) {
    await this.router.navigate(['current']);
    this.booksService.setCurrentBook(book);
  }
}
