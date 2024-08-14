import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPurchasePaymentComponent } from './edit-purchase-payment.component';

describe('EditPurchasePaymentComponent', () => {
  let component: EditPurchasePaymentComponent;
  let fixture: ComponentFixture<EditPurchasePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPurchasePaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPurchasePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
