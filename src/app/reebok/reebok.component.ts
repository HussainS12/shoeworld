import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CartlistService } from '../cartlist.service';
import { Product } from '../product';
import { ProductlistService } from '../productlist.service';

@Component({
  selector: 'app-reebok',
  templateUrl: './reebok.component.html',
  styleUrls: ['./reebok.component.scss'],
})
export class ReebokComponent implements OnInit {
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
        if (data[i].Category === 'Reebok') {
          this.RProd.push(data[i]);
        }
      }
    });
  }
  setItem(product) {
    //console.log(product);
    this.clist.addListItem();
    this.clist.addProduct(product);
    //console.log(this.clist.getProduct());
  }
}
