import { Injectable } from '@angular/core';
import { Product } from '../model/products';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  constructor(private http: HttpClient) {}
  isFetching: boolean = false;
  allProducts: Product[] = [];

  createProduct(product) {
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

  fetchProduct() {
    return this.http
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

  }

  deleteProduct() {}

  clearAllItem() {}
}
