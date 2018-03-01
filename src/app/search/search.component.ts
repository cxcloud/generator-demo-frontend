import { Component, OnInit } from '@angular/core';
import { SEARCH_DATA } from '../mock/search-data';
import { SearchService } from '../core/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // TODO: temp data
  searchResults = SEARCH_DATA;
  default = 'All';
  section = this.default;

  get searchSections() {
    return SEARCH_DATA.reduce(
      (arr, item) => {
        arr.push(item.section);
        return arr;
      },
      [this.default]
    );
  }

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  get searchQuery() {
    return this.searchService.searchQuery;
  }

  filterSearchContent(section) {
    this.section = section;
    this.searchResults = SEARCH_DATA.filter(
      result => result.section === section
    );

    if (section === this.default) {
      this.searchResults = SEARCH_DATA;
    }
  }
}
