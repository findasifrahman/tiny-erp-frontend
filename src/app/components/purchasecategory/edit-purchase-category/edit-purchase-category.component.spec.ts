import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPurchaseCategoryComponent } from './edit-purchase-category.component';

describe('EditPurchaseCategoryComponent', () => {
  let component: EditPurchaseCategoryComponent;
  let fixture: ComponentFixture<EditPurchaseCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPurchaseCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPurchaseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
