import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductlistService } from '../productlist.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  Products: Array<Product>;
  url: string;
  constructor(private product: ProductlistService, private http: HttpClient) {}

  ngOnInit(): void {
    this.product.getProducts().subscribe((data: Product[]) => {
      this.Products = data;
      console.log(this.Products);
    });
  }

  delItem(id) {
    console.log(id);
    for (let i = 0; i < this.Products.length; i++) {
      if (this.Products[i].id === id) {
        this.Products.splice(i, 1);
        this.url = 'http://localhost:8000/Products/' + id;
        console.log(this.url);
        this.http.delete(this.url).subscribe();
      }
    }
  }
}
