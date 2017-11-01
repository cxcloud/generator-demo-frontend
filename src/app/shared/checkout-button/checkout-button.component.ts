import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-checkout-button',
  templateUrl: './checkout-button.component.html',
  styleUrls: ['./checkout-button.component.scss']
})
export class CheckoutButtonComponent implements OnInit {
  @Input('name') name: string;
  constructor() { }

  ngOnInit() {
  }

}
