import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPurchaseSubCategoryComponent } from './list-purchase-sub-category.component';

describe('ListPurchaseSubCategoryComponent', () => {
  let component: ListPurchaseSubCategoryComponent;
  let fixture: ComponentFixture<ListPurchaseSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPurchaseSubCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPurchaseSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
