import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartlistService } from '../cartlist.service';
import { Product } from '../product';
import { ProductlistService } from '../productlist.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  Products: Array<Product>;
  constructor(
    private _Products: ProductlistService,
    private clist: CartlistService
  ) {
    this.Products = [];
  }

  ngOnInit(): void {
    this._Products.getProducts().subscribe((data: any[]) => {
      console.log(data);
      this.Products = data;
    });
  }
  setItem(product) {
    //console.log(product);
    this.clist.addListItem();
    this.clist.addProduct(product);
    //console.log(this.clist.getProduct());
  }
}
