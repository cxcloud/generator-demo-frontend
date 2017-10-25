import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../types/category.model';

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
  categories: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.onToggleMenu();
    this.getCategories();
  }
  getCategories() {
    this.http.get('https://demo.cxcloud.xyz/api/v1/categories').subscribe(data => {
      console.log('---->', data);
      this.categories = data;
    });
  }
  onToggleMenu() {
    document.addEventListener('DOMContentLoaded', function () {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {

            // Get the target from the "data-target" attribute
            const target = $el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

          });
        });
      }
    });
  }

}
