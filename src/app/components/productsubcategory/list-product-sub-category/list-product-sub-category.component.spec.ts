import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductSubCategoryComponent } from './list-product-sub-category.component';

describe('ListProductSubCategoryComponent', () => {
  let component: ListProductSubCategoryComponent;
  let fixture: ComponentFixture<ListProductSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProductSubCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
