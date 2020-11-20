import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchProductsComponent } from './lunch-products.component';

xdescribe('LunchProductsComponent', () => {
  let component: LunchProductsComponent;
  let fixture: ComponentFixture<LunchProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunchProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
