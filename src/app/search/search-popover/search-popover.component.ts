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

  hits: any;
  defaultImage = './assets/images/comingsoon.png';

  constructor(private router: Router, private searchService: SearchService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchQuery) {
      const currentValue = changes.searchQuery.currentValue;
      this.isPopoverShown = currentValue.length > 0;
      this.displayHits(currentValue);
    }
    if (
      changes.searchEvent &&
      changes.searchEvent.currentValue instanceof Event
    ) {
      this.onSearch();
    }
  }

  displayHits(query) {
    this.searchService
      .searchByQuery({
        query: query,
        hitsPerPage: '5',
        attributesToRetrieve: 'id,name.en,description.en,images'
      })
      .subscribe((result: any) => {
        this.hits = result.hits;
      });
  }

  onSearch() {
    this.router.navigateByUrl('search');
    this.isPopoverShown = false;
  }
}
