import { Input, Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../../common/mock-data';
import { Category } from '../../categories/categories.model';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  categories: Category[] = CATEGORIES;

  constructor() { }

  ngOnInit() {}
}
