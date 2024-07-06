import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaymentSalesComponent } from './edit-payment-sales.component';

describe('EditPaymentSalesComponent', () => {
  let component: EditPaymentSalesComponent;
  let fixture: ComponentFixture<EditPaymentSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPaymentSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPaymentSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
