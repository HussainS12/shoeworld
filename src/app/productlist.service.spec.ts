import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { Product } from './product';

import { ProductlistService } from './productlist.service';

describe('ProductlistService', () => {
  let service: ProductlistService;
  let HttpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
    });
    service = TestBed.inject(ProductlistService);
    HttpMock = TestBed.inject(HttpTestingController);
  });

  it('should get all the products from db.json file', () => {
    const DummyPost: Product[] = [
      {
        id: 1,
        Name: 'Afrojack Mens Running Shoes',
        ImageURL: 'assets/images/ReebokUnisez.JPG',
        Price: 120,
        Category: 'Afrojack',
      },
      {
        id: 2,
        Name: 'Afrojack Mens Running Shoes',
        ImageURL: 'assets/images/ReebokUnisez.JPG',
        Price: 120,
        Category: 'Afrojack',
      },
    ];
    service.getProducts().subscribe((data) => {
      expect(data.length).toBe(2);
      expect(data).toEqual(DummyPost);
    });
    const req = HttpMock.expectOne(service._url);
    expect(req.request.method).toBe('GET');

    req.flush(DummyPost);
  });
});
