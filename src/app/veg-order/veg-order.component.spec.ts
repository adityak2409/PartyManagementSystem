import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegOrderComponent } from './veg-order.component';

describe('VegOrderComponent', () => {
  let component: VegOrderComponent;
  let fixture: ComponentFixture<VegOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VegOrderComponent]
    });
    fixture = TestBed.createComponent(VegOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
