import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogleViewComponent } from './togle-view.component';

describe('TogleViewComponent', () => {
  let component: TogleViewComponent;
  let fixture: ComponentFixture<TogleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TogleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
