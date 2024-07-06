import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPurchaseSubCategoryComponent } from './edit-purchase-sub-category.component';

describe('EditPurchaseSubCategoryComponent', () => {
  let component: EditPurchaseSubCategoryComponent;
  let fixture: ComponentFixture<EditPurchaseSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPurchaseSubCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPurchaseSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
