import { Injectable } from '@angular/core';
import { Product } from '../model/products';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  constructor(private http: HttpClient) {}

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

  fetchProduct() {}

  deleteProduct() {}

  clearAllItem() {}
}
