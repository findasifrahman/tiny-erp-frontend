import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfficeExpenditureComponent } from './list-office-expenditure.component';

describe('ListOfficeExpenditureComponent', () => {
  let component: ListOfficeExpenditureComponent;
  let fixture: ComponentFixture<ListOfficeExpenditureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOfficeExpenditureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfficeExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
