import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastProductsComponent } from './breakfast-products.component';

describe('BreakfastProductsComponent', () => {
  let component: BreakfastProductsComponent;
  let fixture: ComponentFixture<BreakfastProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakfastProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfastProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
