import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { CurrentUserService } from '../../core/auth/current-user.service';
import { CartService } from '../../core/cart/cart.service';

@Component({
  selector: 'app-brand-navbar',
  templateUrl: './brand-navbar.component.html',
  styleUrls: ['./brand-navbar.component.scss']
})
export class BrandNavbarComponent implements OnInit {
  total = 0;

  constructor(
    private cartService: CartService,
    private currentUserService: CurrentUserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.cartService.cart.subscribe(cart => {
      if (cart === null) {
        return;
      }
      this.total = this.cartService.totalCount;
    });
  }

  get currentUser(): any {
    if (this.currentUserService.isLoggedIn) {
      return this.currentUserService.customer.getValue();
    }
    return false;
  }

  logOut() {
    this.authService.logout();
  }
}
