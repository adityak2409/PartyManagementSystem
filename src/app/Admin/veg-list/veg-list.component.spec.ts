import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegListComponent } from './veg-list.component';

describe('VegListComponent', () => {
  let component: VegListComponent;
  let fixture: ComponentFixture<VegListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VegListComponent]
    });
    fixture = TestBed.createComponent(VegListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
