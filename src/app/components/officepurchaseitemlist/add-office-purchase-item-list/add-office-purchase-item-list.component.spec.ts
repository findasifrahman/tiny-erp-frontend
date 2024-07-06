import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfficePurchaseItemListComponent } from './add-office-purchase-item-list.component';

describe('AddOfficePurchaseItemListComponent', () => {
  let component: AddOfficePurchaseItemListComponent;
  let fixture: ComponentFixture<AddOfficePurchaseItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOfficePurchaseItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOfficePurchaseItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
