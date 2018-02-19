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

  constructor() {}

  ngOnInit() {}
}
