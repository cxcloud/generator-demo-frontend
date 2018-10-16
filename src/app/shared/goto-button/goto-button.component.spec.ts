import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GotoButtonComponent } from './goto-button.component';

describe('CheckoutButtonComponent', () => {
  let component: GotoButtonComponent;
  let fixture: ComponentFixture<GotoButtonComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [GotoButtonComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GotoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
