import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrderContentComponent } from './cart-order-content.component';

describe('CartOrderContentComponent', () => {
  let component: CartOrderContentComponent;
  let fixture: ComponentFixture<CartOrderContentComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CartOrderContentComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
