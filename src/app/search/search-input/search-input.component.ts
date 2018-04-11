import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import * as autocomplete from 'autocomplete.js';
import { SearchService } from '../../core/search/search.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  searchForm: FormGroup;
  autoCompleteResulted = false;

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit() {
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
