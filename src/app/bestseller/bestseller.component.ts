import { Component, OnInit } from '@angular/core';
import { CartlistService } from '../cartlist.service';
import { Product } from '../product';
import { ProductlistService } from '../productlist.service';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.scss'],
})
export class BestsellerComponent implements OnInit {
  Products: Array<Product>;
  constructor(
    private _Products: ProductlistService,
    private clist: CartlistService
  ) {
    this.Products = [];
  }

  ngOnInit(): void {
    this._Products.getProducts().subscribe((data: any[]) => {
      for (let i = 0; i < 5; i++) {
        this.Products.push(data[i]);
      }
      //console.log(this.Products.length);
    });
  }
  setItem(product) {
    console.log(product);
    this.clist.addListItem();
    this.clist.addProduct(product);
    //console.log(this.clist.getProduct());
  }
}
