import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Category } from '@cxcloud/ct-types/categories';
import { CommerceService } from '../../core/commerce/commerce.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [CommerceService]
})
export class HeaderComponent implements OnInit {
  title = 'CX Cloud';
  categories: Category[];

  searchForm: FormGroup;
  searchQuery = '';

  constructor(
    private router: Router,
    private commerceService: CommerceService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.onToggleMenu();

    this.commerceService
      .getCategories()
      .subscribe(data => (this.categories = data));

    this.searchForm = this.formBuilder.group({
      search: ['']
    });
  }

  onToggleMenu() {
    document.addEventListener('DOMContentLoaded', function() {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll('.navbar-burger'),
        0
      );
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function($el) {
          $el.addEventListener('click', function() {
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

  showSearchPopover(event) {
    this.searchQuery = event.target.value;
  }
}
