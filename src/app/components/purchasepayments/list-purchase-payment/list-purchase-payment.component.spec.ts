import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPurchasePaymentComponent } from './list-purchase-payment.component';

describe('ListPurchasePaymentComponent', () => {
  let component: ListPurchasePaymentComponent;
  let fixture: ComponentFixture<ListPurchasePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPurchasePaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPurchasePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
