import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

  book = {
    title: undefined,
    isbn: undefined,
    author: undefined,
    publisher: undefined,
    price: undefined,
    updated_at: undefined,
    _id: undefined
  };

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
  }


  ngOnInit() {
    this.getBookDetail(this.route.snapshot.params['id']);
  }

  getBookDetail(id: any) {
    this.http.get('/book/' + id).subscribe(data => {
      // @ts-ignore
      this.book = data;
    });
  }

  deleteBook(id: any) {
    this.http.delete('/book/' + id)
      .subscribe(res => {
          this.router.navigate(['/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
