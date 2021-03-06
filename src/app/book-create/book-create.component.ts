import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookCreateComponent implements OnInit {

  book = {
    isbn: undefined,
    title: undefined,
    author: undefined,
    published_year: undefined,
    publisher: undefined
  };

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  saveBook() {
    this.http.post('/book', this.book)
      .subscribe(res => {
          // @ts-ignore
          let id = res['_id'];
          this.router.navigate(['/book-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }


}
