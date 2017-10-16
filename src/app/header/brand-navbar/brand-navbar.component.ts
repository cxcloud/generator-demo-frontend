import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brand-navbar',
  templateUrl: './brand-navbar.component.html',
  styleUrls: ['./brand-navbar.component.scss']
})
export class BrandNavbarComponent implements OnInit {
  @Input('title') title: string;
  @Input('brandMenu') brandMenu: any;

  constructor() { }

  ngOnInit() {
  }

}
