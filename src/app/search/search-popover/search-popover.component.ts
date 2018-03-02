import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges
} from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../core/search/search.service';

@Component({
  selector: 'app-search-popover',
  templateUrl: './search-popover.component.html',
  styleUrls: ['./search-popover.component.scss']
})
export class SearchPopoverComponent implements OnInit, OnChanges {
  @Input('searchQuery') searchQuery: string;
  @Input('searchEvent') searchEvent: string;
  isPopoverShown = false;

  searchResults: any;
  defaultImage = './assets/images/comingsoon.png';

  constructor(private router: Router, private searchService: SearchService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchQuery) {
      const currentValue = changes.searchQuery.currentValue;
      this.isPopoverShown = currentValue && currentValue.length > 0;

      this.getSearchResults(5).subscribe(
        (resp: any) => (this.searchResults = resp.hits)
      );
    }
    if (
      changes.searchEvent &&
      changes.searchEvent.currentValue instanceof Event
    ) {
      // Avoid displaying results for empty string query
      if (this.searchQuery.length > 0) {
        this.getSearchResults(20).subscribe((resp: any) => {
          this.searchService.results.next(resp);
        });
      }
      this.navigateToSearchPage();
    }
  }

  getSearchResults(hitPerPage) {
    return this.searchService.searchByQuery({
      query: this.searchQuery,
      hitsPerPage: hitPerPage.toString(),
      attributesToRetrieve: 'id,name.en,description.en,images'
    });
  }

  navigateToSearchedItem(item) {
    this.router.navigateByUrl(`product/${item.id}`);
    this.isPopoverShown = false;
  }

  navigateToSearchPage() {
    this.router.navigateByUrl('search');
    this.isPopoverShown = false;
  }
}
