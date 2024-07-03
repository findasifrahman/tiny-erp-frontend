import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMainCompanyComponent } from './list-main-company.component';

describe('ListMainCompanyComponent', () => {
  let component: ListMainCompanyComponent;
  let fixture: ComponentFixture<ListMainCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMainCompanyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMainCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
