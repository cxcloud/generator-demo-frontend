import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brand-navbar',
  templateUrl: './brand-navbar.component.html',
  styleUrls: ['./brand-navbar.component.scss']
})
export class BrandNavbarComponent implements OnInit {
  total: string | 0;

  constructor() {}

  ngOnInit() {
    this.total = this.getTotalOrderedQuantity();
  }

  getTotalOrderedQuantity() {
    return localStorage.getItem('totalCartItems') !== null
      ? localStorage.getItem('totalCartItems')
      : 0;
  }
}
