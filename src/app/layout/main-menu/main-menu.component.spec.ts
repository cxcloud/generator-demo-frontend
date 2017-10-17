import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MainMenuComponent } from './main-menu.component';

const CATEGORIES = [
  {
    id: 1,
    name: {
      en: 'Men'
    },
    ancestors: []
  },
  {
    id: 2,
    name: {
      en: 'Clothing'
    },
    ancestors: [
      {
        typeId: 'category',
        id: 1
      }
    ]
  }
];

describe('MainMenuComponent', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<MainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuComponent);
    component = fixture.componentInstance;
    component.categories = CATEGORIES;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain sub Ctegories', () => {
    const menu = component.getMenuItems();
    expect(menu[0].subCategories.length).toEqual(1);
  });
});
