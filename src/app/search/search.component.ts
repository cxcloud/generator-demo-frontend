import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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

  constructor(
    private router: Router,
    public searchService: SearchService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      const { query } = params;

      this.searchService
        .searchByQuery({
          query,
          hitsPerPage: '20',
          attributesToRetrieve: 'id,name.en,description.en,images'
        })
        .subscribe(resp => (this.searchResults = resp));
    });
  }

  filterSearchContent(category) {
    // TODO: filter content by category when several sources on place (ecommerce, contentful)
    this.category = category;
  }

  navigateToSearchedItem(item) {
    this.router.navigateByUrl(`product/${item.id}`);
  }
}
