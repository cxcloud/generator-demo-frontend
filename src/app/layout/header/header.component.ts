import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Category } from '@cxcloud/ct-types/categories';
import * as autocomplete from 'autocomplete.js';
import { CommerceService } from '../../core/commerce/commerce.service';
import { environment } from '../../../environments/environment';
import { SearchService } from '../../core/search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [CommerceService]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  title = environment.siteName;
  categories: Category[];

  searchForm: FormGroup;
  autoCompleteResulted = false;

  constructor(
    private router: Router,
    private commerceService: CommerceService,
    private formBuilder: FormBuilder,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.onToggleMenu();

    this.commerceService
      .getCategories()
      .subscribe(categories => (this.categories = categories));

    this.searchForm = this.formBuilder.group({
      query: ['']
    });
  }

  ngAfterViewInit() {
    const el = this.searchInput.nativeElement;
    const searchComponent = autocomplete(el, { hint: true, autoselect: true }, [
      {
        source: (query, callback) => {
          this.searchService
            .searchByQuery({
              query,
              hitsPerPage: '3',
              attributesToRetrieve: 'id,name.en,description.en,images'
            })
            .subscribe((resp: any) => callback(resp.hits));
        },
        displayKey: 'name.en',
        templates: {
          header: '<div class="aa-suggestions-category">Products</div>',
          suggestion: suggestion => suggestion._highlightResult['name.en'].value
        }
      },
      {
        source: (query, callback) => {
          this.searchService
            .searchByQuery(
              {
                query,
                hitsPerPage: '3',
                attributesToRetrieve: 'slug,title'
              },
              'dev_CONTENT'
            )
            .subscribe((resp: any) => callback(resp.hits));
        },
        displayKey: 'title',
        templates: {
          header: '<div class="aa-suggestions-category">Content</div>',
          suggestion: suggestion => suggestion._highlightResult.title.value
        }
      }
    ]);
    searchComponent
      .on('autocomplete:selected', (event, suggestion, dataset) => {
        searchComponent.autocomplete.setVal('');
        const destination =
          dataset === 1
            ? `product/${suggestion.id}`
            : `pages/${suggestion.slug}`;
        this.router.navigateByUrl(destination);
      })
      .on('autocomplete:shown', () => {
        this.autoCompleteResulted = true;
      })
      .on('autocomplete:empty', () => {
        this.autoCompleteResulted = false;
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

  onSearch(event) {
    const { value } = this.searchInput.nativeElement;
    if (
      event.type !== 'click' &&
      (this.autoCompleteResulted || value.trim().length === 0)
    ) {
      return;
    }
    this.searchService
      .searchByQuery({
        query: value,
        hitsPerPage: '20',
        attributesToRetrieve: 'id,name.en,description.en,images'
      })
      .subscribe((resp: any) => {
        this.searchService.results.next(resp);
        this.router.navigateByUrl('search');
      });
  }
}
