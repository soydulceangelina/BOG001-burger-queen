import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenViewComponent } from './kitchen-view.component';

xdescribe('KitchenViewComponent', () => {
  let component: KitchenViewComponent;
  let fixture: ComponentFixture<KitchenViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
