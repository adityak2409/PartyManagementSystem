import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVegComponent } from './add-veg.component';

describe('AddVegComponent', () => {
  let component: AddVegComponent;
  let fixture: ComponentFixture<AddVegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVegComponent]
    });
    fixture = TestBed.createComponent(AddVegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
