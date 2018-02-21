import { Component, OnInit } from '@angular/core';
import { SEARCH_DATA } from '../mock/search-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  // TODO: temp data
  searchResults = SEARCH_DATA;

  get searchSections() {
    return SEARCH_DATA.reduce(
      (arr, item) => {
        arr.push(item.section);
        return arr;
      },
      ['All']
    );
  }

  constructor() {}

  ngOnInit() {}

  filterSearchContent(section) {
    this.searchResults = SEARCH_DATA.filter(
      result => result.section === section
    );

    if (section === 'All') {
      this.searchResults = SEARCH_DATA;
    }
  }
}
