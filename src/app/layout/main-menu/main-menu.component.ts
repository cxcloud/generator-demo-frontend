import { Input, Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../../mock-data';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  categories = CATEGORIES;

  constructor() { }

  ngOnInit() {}
}
