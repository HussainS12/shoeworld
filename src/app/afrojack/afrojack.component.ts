import { Component, OnInit } from '@angular/core';
import { CartlistService } from '../cartlist.service';
import { Product } from '../product';
import { ProductlistService } from '../productlist.service';

@Component({
  selector: 'app-afrojack',
  templateUrl: './afrojack.component.html',
  styleUrls: ['./afrojack.component.scss'],
})
export class AfrojackComponent implements OnInit {
  RProd: Array<Product>;
  constructor(
    private _Products: ProductlistService,
    private clist: CartlistService
  ) {
    this.RProd = [];
  }

  ngOnInit(): void {
    this._Products.getProducts().subscribe((data: Product[]) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].Category === 'Afrojack') {
          this.RProd.push(data[i]);
        }
      }
    });
  }
  setItem(product) {
    this.clist.addListItem();
    this.clist.addProduct(product);
    //console.log(this.clist.getProduct());
  }
}
