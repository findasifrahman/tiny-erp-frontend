import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOfficeExpenditureComponent } from './edit-office-expenditure.component';

describe('EditOfficeExpenditureComponent', () => {
  let component: EditOfficeExpenditureComponent;
  let fixture: ComponentFixture<EditOfficeExpenditureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditOfficeExpenditureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOfficeExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
