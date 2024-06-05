import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNonVegComponent } from './update-non-veg.component';

describe('UpdateNonVegComponent', () => {
  let component: UpdateNonVegComponent;
  let fixture: ComponentFixture<UpdateNonVegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateNonVegComponent]
    });
    fixture = TestBed.createComponent(UpdateNonVegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
