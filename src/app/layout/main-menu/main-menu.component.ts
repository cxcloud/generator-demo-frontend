import { Input, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '@cxcloud/ct-types/categories';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  @Input() categories: Category[];

  constructor() {}

  ngOnInit() {}
}
