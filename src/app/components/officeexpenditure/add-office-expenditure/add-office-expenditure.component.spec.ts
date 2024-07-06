import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfficeExpenditureComponent } from './add-office-expenditure.component';

describe('AddOfficeExpenditureComponent', () => {
  let component: AddOfficeExpenditureComponent;
  let fixture: ComponentFixture<AddOfficeExpenditureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOfficeExpenditureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOfficeExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
