import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private searchService: SearchService) {}

  ngOnInit() {}

  filterSearchContent(category) {
    // TODO: filter content when several sources on place
    console.log('Filter by category', category);
  }

  navigateToSearchedItem(item) {
    this.router.navigateByUrl(`product/${item.id}`);
  }
}
