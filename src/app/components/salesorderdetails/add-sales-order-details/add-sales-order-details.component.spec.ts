import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalesOrderDetailsComponent } from './add-sales-order-details.component';

describe('AddSalesOrderDetailsComponent', () => {
  let component: AddSalesOrderDetailsComponent;
  let fixture: ComponentFixture<AddSalesOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSalesOrderDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSalesOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
