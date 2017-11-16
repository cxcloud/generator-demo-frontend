import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../core/cart/cart.service';

@Component({
  selector: 'app-brand-navbar',
  templateUrl: './brand-navbar.component.html',
  styleUrls: ['./brand-navbar.component.scss']
})
export class BrandNavbarComponent implements OnInit {
  private total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart.subscribe(cart => {
      if (cart === null) {
        return;
      }
      this.total = cart.lineItems.length;
    });
  }
}
