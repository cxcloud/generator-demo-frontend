import { Component, OnInit } from '@angular/core';
import { SearchService } from '../core/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchResults: any;
  categories = ['All', 'Products'];
  defaultImage = './assets/images/comingsoon.png';

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    if (
      this.searchService.searchQuery &&
      this.searchService.searchQuery.length > 0
    ) {
      this.getSearchResults();
    }
  }

  get searchQuery() {
    return this.searchService.searchQuery;
  }

  getSearchResults() {
    this.searchService
      .searchByQuery({
        query: this.searchService.searchQuery,
        hitsPerPage: '20',
        attributesToRetrieve: 'id,name.en,description.en,images'
      })
      .subscribe((result: any) => {
        this.searchResults = result.hits;
      });
  }

  filterSearchContent(category) {
    // TODO: filter content when several sources on place
    console.log('Filter by category', category);
  }
}
