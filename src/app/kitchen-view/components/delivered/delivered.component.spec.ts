import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredComponent } from './delivered.component';

xdescribe('DeliveredComponent', () => {
  let component: DeliveredComponent;
  let fixture: ComponentFixture<DeliveredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
