import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaymentSalesComponent } from './list-payment-sales.component';

describe('ListPaymentSalesComponent', () => {
  let component: ListPaymentSalesComponent;
  let fixture: ComponentFixture<ListPaymentSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPaymentSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPaymentSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
