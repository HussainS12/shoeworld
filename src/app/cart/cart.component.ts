import { Component, OnInit } from '@angular/core';
import { CartlistService } from '../cartlist.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  CartItems: Array<Product>;
  CartTotal: number;
  constructor(private clist: CartlistService) {
    this.CartTotal = 0;
  }

  ngOnInit(): void {
    if (!localStorage.getItem('CartItem')) {
      this.CartItems = [];
    } else {
      this.CartItems = JSON.parse(localStorage.getItem('CartItem'));
      for (let i = 0; i < this.CartItems.length; i++) {
        this.CartTotal += this.CartItems[i].Price;
      }
    }
  }

  DeleteItem(item) {
    for (let i = 0; i < this.CartItems.length; i++) {
      if (item === this.CartItems[i].id) {
        this.CartTotal -= this.CartItems[i].Price;
        this.CartItems.splice(i, 1);
        this.clist.removeListItem();
        this.clist.removeProduct(item);
        localStorage.setItem('CartItem', JSON.stringify(this.CartItems));
        break;
      }
    }
  }
}
