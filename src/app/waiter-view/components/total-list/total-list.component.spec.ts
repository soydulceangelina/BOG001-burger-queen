import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalListComponent } from './total-list.component';

xdescribe('TotalListComponent', () => {
  let component: TotalListComponent;
  let fixture: ComponentFixture<TotalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
