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

const makeHeader = (title, link = '#') => `
  <div class="section-title mt-half mb-1 p-half level">
    <div class="level-left">${title}</div>
    <div class="is-uppercase level-right more"><a href="${link}">More</a></div>
  </div>
`;

const getCategory = categoriesStr => {
  const catArray = categoriesStr.split(';');
  if (catArray.length === 0) {
    return '';
  }
  return catArray[0].replace(/>/g, ' &rarr; ');
};

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput') searchInput: ElementRef;
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
          suggestion: searchSource.render
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
    this.router.navigateByUrl(`search?query=${value}`);
  }
}
