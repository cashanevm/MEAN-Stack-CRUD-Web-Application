import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookComponent} from "./book/book.component";
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookCreateComponent} from "./book-create/book-create.component";
import {BookEditComponent} from "./book-edit/book-edit.component";

const routes: Routes = [
  {
    path: 'books',
    component: BookComponent,
    data: {title: 'Book List'}
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: {title: 'Book Details'}
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: {title: 'Create Book'}
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: {title: 'Edit Book'}
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [BrowserModule,
    HttpClientModule,

    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

