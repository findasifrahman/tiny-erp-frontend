import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssetsComponent } from './list-assets.component';

describe('ListAssetsComponent', () => {
  let component: ListAssetsComponent;
  let fixture: ComponentFixture<ListAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAssetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
