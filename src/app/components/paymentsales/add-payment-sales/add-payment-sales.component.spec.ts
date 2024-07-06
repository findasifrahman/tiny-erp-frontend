import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentSalesComponent } from './add-payment-sales.component';

describe('AddPaymentSalesComponent', () => {
  let component: AddPaymentSalesComponent;
  let fixture: ComponentFixture<AddPaymentSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPaymentSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaymentSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
