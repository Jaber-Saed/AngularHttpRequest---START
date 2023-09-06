import { Component, OnInit } from '@angular/core';
import { Product } from './model/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularHttpRequest';
  constructor() {}

  ngOnInit(): void {}
  onProductCreate(product: Product) {
    console.warn(product);
  }
}
