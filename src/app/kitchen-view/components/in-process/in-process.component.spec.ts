import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProcessComponent } from './in-process.component';

xdescribe('InProcessComponent', () => {
  let component: InProcessComponent;
  let fixture: ComponentFixture<InProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
