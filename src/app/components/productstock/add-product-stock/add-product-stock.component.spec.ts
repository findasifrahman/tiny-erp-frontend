import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductStockComponent } from './add-product-stock.component';

describe('AddProductStockComponent', () => {
  let component: AddProductStockComponent;
  let fixture: ComponentFixture<AddProductStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProductStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
