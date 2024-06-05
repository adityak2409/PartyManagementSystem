import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNonVegComponent } from './add-non-veg.component';

describe('AddNonVegComponent', () => {
  let component: AddNonVegComponent;
  let fixture: ComponentFixture<AddNonVegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNonVegComponent]
    });
    fixture = TestBed.createComponent(AddNonVegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
