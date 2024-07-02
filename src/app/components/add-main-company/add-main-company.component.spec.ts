import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMainCompanyComponent } from './add-main-company.component';

describe('AddMainCompanyComponent', () => {
  let component: AddMainCompanyComponent;
  let fixture: ComponentFixture<AddMainCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMainCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMainCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
