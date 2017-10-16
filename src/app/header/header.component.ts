import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'CX Cloud';

  // Brand navbar
  brandMenu = [
    {name: 'LogIn', icon: 'mdi-account'},
    {name: 'Cart', icon: 'mdi-cart'}
  ];
  menuItems = {
    categories: {
      category: {
        name: 'Home'
      }
    }
};
  constructor() { }

  ngOnInit() {
  }

}
