import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOfficePurchaseItemListComponent } from './edit-office-purchase-item-list.component';

describe('EditOfficePurchaseItemListComponent', () => {
  let component: EditOfficePurchaseItemListComponent;
  let fixture: ComponentFixture<EditOfficePurchaseItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditOfficePurchaseItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOfficePurchaseItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
