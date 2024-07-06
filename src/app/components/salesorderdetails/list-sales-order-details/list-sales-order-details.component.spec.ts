import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalesOrderDetailsComponent } from './list-sales-order-details.component';

describe('ListSalesOrderDetailsComponent', () => {
  let component: ListSalesOrderDetailsComponent;
  let fixture: ComponentFixture<ListSalesOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSalesOrderDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSalesOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
