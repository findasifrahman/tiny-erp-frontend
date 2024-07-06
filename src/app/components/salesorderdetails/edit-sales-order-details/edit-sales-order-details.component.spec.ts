import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSalesOrderDetailsComponent } from './edit-sales-order-details.component';

describe('EditSalesOrderDetailsComponent', () => {
  let component: EditSalesOrderDetailsComponent;
  let fixture: ComponentFixture<EditSalesOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSalesOrderDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSalesOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
