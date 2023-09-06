import { Component, OnInit } from '@angular/core';
import { Product } from './model/products';
import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders,
} from '@angular/common/http';
import { map, observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularHttpRequest';
  allProducts: Product[] = [];
  isFetching: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  onProductsFetch() {
    this.fetchProducts();
  }

  onProductCreate(product: Product) {
    console.warn(product);
    const Header = new HttpHeaders({ myHeader: 'MsJaber' });
    this.http
      .post<{ name: string }>(
        'https://angularapi-b85d8-default-rtdb.firebaseio.com/products.json',
        product,
        { headers: Header }
      )
      .subscribe((res) => {
        console.warn(res);
      });
  }

  private fetchProducts() {
    this.isFetching = true;
    this.http
      .get<{ [key: string]: Product }>(
        'https://angularapi-b85d8-default-rtdb.firebaseio.com/products.json'
      )
      .pipe(
        map((res) => {
          const products = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              products.push({ ...res[key], id: key });
            }
          }
          return products;
        })
      )
      .subscribe((products) => {
        console.warn(products);
        this.allProducts = products;
        this.isFetching = false;
      });
  }

  onDeletProduct(id: string) {
    this.http
      .delete(
        'https://angularapi-b85d8-default-rtdb.firebaseio.com/products/' +
          id +
          '.json'
      )
      .subscribe();
  }

  onClearItem() {
    this.http
      .delete(
        'https://angularapi-b85d8-default-rtdb.firebaseio.com/products.json'
      )
      .subscribe();
  }
}
