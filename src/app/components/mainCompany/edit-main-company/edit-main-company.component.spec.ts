import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMainCompanyComponent } from './edit-main-company.component';

describe('EditMainCompanyComponent', () => {
  let component: EditMainCompanyComponent;
  let fixture: ComponentFixture<EditMainCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditMainCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMainCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
