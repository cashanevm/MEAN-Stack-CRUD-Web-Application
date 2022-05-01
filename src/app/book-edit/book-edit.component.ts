import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookEditComponent implements OnInit {

  book = {
    title: undefined,
    isbn: undefined,
    author: undefined,
    publisher: undefined,
    price: undefined,
    updated_at: undefined,
    _id: undefined,
    published_year: undefined
  };

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
  }

  getBook(id: any) {
    this.http.get('/book/' + id).subscribe(data => {
      // @ts-ignore
      this.book = data;
    });
  }

  updateBook(id: any, data: any) {
    this.http.put('/book/' + id, data)
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
