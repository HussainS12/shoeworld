import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartlistService } from '../cartlist.service';
import { Product } from '../product';
import { ProductlistService } from '../productlist.service';

import { BestsellerComponent } from './bestseller.component';

describe('BestsellerComponent', () => {
  let component: BestsellerComponent;
  let fixture: ComponentFixture<BestsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [BestsellerComponent],
      providers: [ProductlistService, CartlistService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
