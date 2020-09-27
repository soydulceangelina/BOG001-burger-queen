import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksProductsComponent } from './drinks-products.component';

describe('DrinksProductsComponent', () => {
  let component: DrinksProductsComponent;
  let fixture: ComponentFixture<DrinksProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinksProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
