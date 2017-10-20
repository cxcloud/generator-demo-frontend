import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input('product') product: any;
  image: string;
  price: string;

  constructor() {  }

  ngOnInit() {
    this.image = this.product.variants[0].images[0];
    this.price = this.product.variants[0].prices[0].value;
  }

}
