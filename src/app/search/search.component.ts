import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { SearchService } from '../core/search/search.service';
import { environment } from '../../environments/environment';
import { getCategory } from '../utils/helpers';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  commerceResults: any;
  contentResults: any;
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
        .searchByQuery(
          {
            query,
            hitsPerPage: '20',
            attributesToRetrieve: 'id,name.en,images,categories'
          },
          environment.commerceIndexName
        )
        .subscribe(resp => (this.commerceResults = resp));
      this.searchService
        .searchByQuery(
          {
            query,
            hitsPerPage: '20',
            attributesToRetrieve: 'slug,title,subTitle'
          },
          environment.contentIndexName
        )
        .subscribe(resp => (this.contentResults = resp));
    });
  }

  getCategory(item) {
    return getCategory(item.categories);
  }
}
