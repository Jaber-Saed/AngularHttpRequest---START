import { Component, OnInit } from '@angular/core';
import { Product } from './model/products';
import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularHttpRequest';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  onProductCreate(product: Product) {
    console.warn(product);
    const Header = new HttpHeaders({ myHeader: 'MsJaber' });
    this.http
      .post(
        'https://angularapi-b85d8-default-rtdb.firebaseio.com/products.json',
        product,
        { headers: Header }
      )
      .subscribe((res) => {
        console.warn(res);
      });
  }
}
