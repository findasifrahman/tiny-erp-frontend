import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfficePurchaseItemListComponent } from './list-office-purchase-item-list.component';

describe('ListOfficePurchaseItemListComponent', () => {
  let component: ListOfficePurchaseItemListComponent;
  let fixture: ComponentFixture<ListOfficePurchaseItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfficePurchaseItemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfficePurchaseItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
