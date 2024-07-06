import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPurchaseCategoryComponent } from './list-purchase-category.component';

describe('ListPurchaseCategoryComponent', () => {
  let component: ListPurchaseCategoryComponent;
  let fixture: ComponentFixture<ListPurchaseCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPurchaseCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPurchaseCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
