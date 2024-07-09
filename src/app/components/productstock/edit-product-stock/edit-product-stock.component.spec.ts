import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductStockComponent } from './edit-product-stock.component';

describe('EditProductStockComponent', () => {
  let component: EditProductStockComponent;
  let fixture: ComponentFixture<EditProductStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProductStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProductStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
