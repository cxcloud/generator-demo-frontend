import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  columns = [
    {
      title: 'Customer care',
      links: [
        {name: 'Contact us', url: '#'},
        {name: 'Help', url: '#'},
        {name: 'Shipping', url: '#'},
        {name: 'Returns', url: '#'},
        {name: 'Size Guide', url: '#'},
      ]
    },
    {
      title: 'About us',
      links: [
        {name: 'Our story', url: '#'},
        {name: 'Careers', url: '#'}
      ]
    },
    {
      title: 'Shortcuts',
      links: [
        {name: 'My account', url: '#'},
        {name: 'Store locator', url: '#'},
        {name: 'Gift Cards', url: '#'},
        {name: 'Payment', url: '#'}
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
