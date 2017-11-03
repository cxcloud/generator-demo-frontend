import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Category } from '../../types/category.model';
import { CommerceService } from '../../core/commerce/commerce.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [CommerceService]
})
export class HeaderComponent implements OnInit {
  title = 'CX Cloud';

  // Brand navbar
  categories: Category[];

  constructor(
    private commerceService: CommerceService
  ) { }

  ngOnInit(): void {
    this.onToggleMenu();

    this.commerceService
    .getCategories()
    .subscribe(data => this.categories = data);
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
