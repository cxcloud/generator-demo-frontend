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

  ngOnInit() {}

  filterSearchContent(category) {
    // TODO: filter content when several sources on place
    console.log('Filter by category', category);
  }
}
