import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { Router } from '@angular/router';
import * as autocomplete from 'autocomplete.js';
import { SearchService } from '../../core/search/search.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput: ElementRef;

  autoCompleteResulted = false;
  sources = [
    {
      query: {
        hitsPerPage: '3',
        attributesToRetrieve: 'id,name.en,description.en,images'
      },
      indexName: environment.commerceIndexName,
      displayKey: 'name.en',
      header: '<div class="aa-suggestions-category">Products</div>'
    },
    {
      query: {
        hitsPerPage: '3',
        attributesToRetrieve: 'slug,title'
      },
      indexName: environment.contentIndexName,
      displayKey: 'title',
      header: '<div class="aa-suggestions-category">Content</div>'
    }
  ];

  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const el = this.searchInput.nativeElement;
    const searchComponent = autocomplete(
      el,
      { hint: true, autoselect: true },
      this.sources.map(searchSource => ({
        source: (query, callback) => {
          this.searchService
            .searchByQuery(
              {
                query,
                ...searchSource.query
              },
              searchSource.indexName
            )
            .subscribe((resp: any) => callback(resp.hits));
        },
        displayKey: searchSource.displayKey,
        templates: {
          header: searchSource.header,
          suggestion: suggestion =>
            suggestion._highlightResult[searchSource.displayKey].value
        }
      }))
    );
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
