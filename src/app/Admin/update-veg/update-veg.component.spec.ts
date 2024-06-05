import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVegComponent } from './update-veg.component';

describe('UpdateVegComponent', () => {
  let component: UpdateVegComponent;
  let fixture: ComponentFixture<UpdateVegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateVegComponent]
    });
    fixture = TestBed.createComponent(UpdateVegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
