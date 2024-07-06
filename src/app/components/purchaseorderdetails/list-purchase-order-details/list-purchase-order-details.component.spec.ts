import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPurchaseOrderDetailsComponent } from './list-purchase-order-details.component';

describe('ListPurchaseOrderDetailsComponent', () => {
  let component: ListPurchaseOrderDetailsComponent;
  let fixture: ComponentFixture<ListPurchaseOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPurchaseOrderDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPurchaseOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
