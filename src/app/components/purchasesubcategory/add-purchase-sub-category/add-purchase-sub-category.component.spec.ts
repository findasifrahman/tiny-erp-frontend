import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPurchaseSubCategoryComponent } from './add-purchase-sub-category.component';

describe('AddPurchaseSubCategoryComponent', () => {
  let component: AddPurchaseSubCategoryComponent;
  let fixture: ComponentFixture<AddPurchaseSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPurchaseSubCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPurchaseSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
