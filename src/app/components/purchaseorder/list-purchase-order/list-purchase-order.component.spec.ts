import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPurchaseOrderComponent } from './list-purchase-order.component';

describe('ListPurchaseOrderComponent', () => {
  let component: ListPurchaseOrderComponent;
  let fixture: ComponentFixture<ListPurchaseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPurchaseOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
