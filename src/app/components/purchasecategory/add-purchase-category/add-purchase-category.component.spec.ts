import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPurchaseCategoryComponent } from './add-purchase-category.component';

describe('AddPurchaseCategoryComponent', () => {
  let component: AddPurchaseCategoryComponent;
  let fixture: ComponentFixture<AddPurchaseCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPurchaseCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPurchaseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
