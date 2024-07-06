import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductSubCategoryComponent } from './edit-product-sub-category.component';

describe('EditProductSubCategoryComponent', () => {
  let component: EditProductSubCategoryComponent;
  let fixture: ComponentFixture<EditProductSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditProductSubCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProductSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
