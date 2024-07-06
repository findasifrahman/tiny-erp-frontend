import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssetsComponent } from './add-assets.component';

describe('AddAssetsComponent', () => {
  let component: AddAssetsComponent;
  let fixture: ComponentFixture<AddAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAssetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
