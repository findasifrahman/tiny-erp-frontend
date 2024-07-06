import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPurchaseOrderDetailsComponent } from './add-purchase-order-details.component';

describe('AddPurchaseOrderDetailsComponent', () => {
  let component: AddPurchaseOrderDetailsComponent;
  let fixture: ComponentFixture<AddPurchaseOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPurchaseOrderDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPurchaseOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
