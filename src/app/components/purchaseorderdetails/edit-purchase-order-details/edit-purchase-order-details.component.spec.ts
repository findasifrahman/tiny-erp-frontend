import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPurchaseOrderDetailsComponent } from './edit-purchase-order-details.component';

describe('EditPurchaseOrderDetailsComponent', () => {
  let component: EditPurchaseOrderDetailsComponent;
  let fixture: ComponentFixture<EditPurchaseOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPurchaseOrderDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPurchaseOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
