import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { ProductlistService } from '../productlist.service';

import { AfrojackComponent } from './afrojack.component';

describe('AfrojackComponent', () => {
  let component: AfrojackComponent;
  let fixture: ComponentFixture<AfrojackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [AfrojackComponent],
      providers: [ProductlistService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfrojackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
