import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as autocomplete from 'autocomplete.js';
import { environment } from '../../../environments/environment';
import { SearchService } from '../../core/search/search.service';
import { getCategory } from '../../utils/helpers';

const makeHeader = (title, link = '#') => `
  <div class="section-title mt-half mb-1 p-half level">
    <div class="level-left">${title}</div>
    <div class="is-uppercase level-right more"><a href="${link}">More</a></div>
  </div>
`;

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  search: any; // Autocomplete instance
  defaultImage = './assets/images/comingsoon.png';
  autoCompleteResulted = false;

  sources = [
    {
      query: {
        hitsPerPage: '3',
        attributesToRetrieve: 'id,name.en,description.en,images,categories'
      },
      indexName: environment.commerceIndexName,
      displayKey: 'name.en',
      header: makeHeader('Products'),
      render: suggestion => `
        <figure class="image">
          <img src="${suggestion.images}" onerror="this.src='${
        this.defaultImage
      }'">
        </figure>
        <div class="ml-1">
          ${suggestion._highlightResult['name.en'].value}
          <div class="has-text-grey-light is-size-7">
            ${getCategory(suggestion.categories)}
          </div>
        </div>
      `
    },
    {
      query: {
        hitsPerPage: '3',
        attributesToRetrieve: 'slug,title'
      },
      indexName: environment.contentIndexName,
      displayKey: 'title',
      header: makeHeader('Content'),
      render: suggestion =>
        `<span>${suggestion._highlightResult.title.value}</span>`
    }
  ];

  constructor(private searchService: SearchService, private router: Router) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const el = this.searchInput.nativeElement;
    this.search = autocomplete(
      el,
      { hint: true, autoselect: false },
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
          suggestion: searchSource.render
        }
      }))
    );
    this.search
      .on('autocomplete:selected', (event, suggestion, dataset) => {
        this.autoCompleteResulted = true;
        this.search.autocomplete.setVal('');
        const destination =
          dataset === 1
            ? `product/${suggestion.id}`
            : `pages/${suggestion.slug}`;
        this.router.navigateByUrl(destination);
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
    this.search.autocomplete.close();
    this.searchInput.nativeElement.blur();
    this.router.navigateByUrl(`search?query=${value}`);
  }
}
