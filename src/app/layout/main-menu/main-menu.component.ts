import { Input, Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../../mock/categories';
import { Category } from '../../types/category.model';
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
