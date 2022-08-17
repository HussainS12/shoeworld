import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class CartlistService {
  public count = 0;
  temp: Array<Product>;
  public CartItems: Array<Product>;
  public ListItemCount = new BehaviorSubject(0);
  constructor() {
    if (localStorage.getItem('CartItem')) {
      this.temp = JSON.parse(localStorage.getItem('CartItem'));
    } else {
      this.temp = [];
    }
    if (this.temp.length !== 0) {
      this.CartItems = JSON.parse(localStorage.getItem('CartItem'));
      this.count = this.CartItems.length;
      this.ListItemCount.next(this.count);
    } else {
      this.count = 0;
      this.CartItems = [];
      this.ListItemCount.next(this.count);
    }
  }

  addListItem() {
    this.ListItemCount.next(++this.count);
  }

  getListCount() {
    return this.ListItemCount.asObservable();
  }

  removeListItem() {
    this.ListItemCount.next(--this.count);
  }

  addProduct(product) {
    this.CartItems.push(product);
    localStorage.clear();
    localStorage.setItem('CartItem', JSON.stringify(this.CartItems));
  }

  removeProduct(id) {
    for (let i = 0; i < this.CartItems.length; i++) {
      if (id === this.CartItems[i].id) {
        this.CartItems.splice(i, 1);
      }
    }
  }

  getProduct() {
    return this.CartItems;
  }
}
