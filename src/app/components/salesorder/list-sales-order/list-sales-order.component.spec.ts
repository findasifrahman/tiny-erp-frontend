import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSalesOrderComponent } from './list-sales-order.component';

describe('ListSalesOrderComponent', () => {
  let component: ListSalesOrderComponent;
  let fixture: ComponentFixture<ListSalesOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSalesOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSalesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
