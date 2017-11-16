import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutButtonComponent } from './checkout-button.component';

describe('CheckoutButtonComponent', () => {
  let component: CheckoutButtonComponent;
  let fixture: ComponentFixture<CheckoutButtonComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CheckoutButtonComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
