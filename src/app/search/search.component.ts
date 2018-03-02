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
  // TODO: get categories from search results
  categories = ['All', 'Products'];
  category = 'All';
  defaultImage = './assets/images/comingsoon.png';

  constructor(private router: Router, public searchService: SearchService) {}

  ngOnInit() {}

  filterSearchContent(category) {
    // TODO: filter content by category when several sources on place (ecommerce, contentful)
    this.category = category;
  }

  navigateToSearchedItem(item) {
    this.router.navigateByUrl(`product/${item.id}`);
  }
}
