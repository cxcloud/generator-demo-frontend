import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HeaderComponent],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    'should render title in a h1 tag',
    async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.title').textContent).toContain(
        'CX Cloud Demo'
      );
    })
  );
});
