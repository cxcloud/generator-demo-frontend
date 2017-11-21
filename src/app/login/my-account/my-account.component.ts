import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  tabs: Array<any> = [
    {
      name: 'Personal Details',
      href: 'user',
      active: true
    },
    {
      name: 'Change Password',
      href: 'change-password'
    },
    {
      name: 'Address book',
      href: 'addressbook'
    },
    {
      name: 'My Orders',
      href: 'my-orders'
    },
    {
      name: 'Sign Out',
      href: 'signout'
    }
  ];

  user: any;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  get customerNumber(): string {
    const hash = this.user.id.split('-');
    return hash[hash.length - 1];
  }

  ngOnInit() {
    if (this.loginService.customer) {
      this.user = this.loginService.customer;
    } else {
      this.signOut();
    }
  }

  signOut() {
    this.router.navigateByUrl('/user/login');
  }
}
