import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonVegListComponent } from './non-veg-list.component';

describe('NonVegListComponent', () => {
  let component: NonVegListComponent;
  let fixture: ComponentFixture<NonVegListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonVegListComponent]
    });
    fixture = TestBed.createComponent(NonVegListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
