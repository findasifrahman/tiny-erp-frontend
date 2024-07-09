import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductStockComponent } from './list-product-stock.component';

describe('ListProductStockComponent', () => {
  let component: ListProductStockComponent;
  let fixture: ComponentFixture<ListProductStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProductStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
