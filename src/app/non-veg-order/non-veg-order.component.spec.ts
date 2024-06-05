import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVegOrderComponent } from './non-veg-order.component';

describe('NonVegOrderComponent', () => {
  let component: NonVegOrderComponent;
  let fixture: ComponentFixture<NonVegOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonVegOrderComponent]
    });
    fixture = TestBed.createComponent(NonVegOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
