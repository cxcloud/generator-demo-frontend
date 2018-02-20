import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges
} from '@angular/core';
import { Router } from '@angular/router';
import { SEARCH_DATA } from '../../mock/search-data';

@Component({
  selector: 'app-search-popover',
  templateUrl: './search-popover.component.html',
  styleUrls: ['./search-popover.component.scss']
})
export class SearchPopoverComponent implements OnInit, OnChanges {
  @Input('searchQuery') searchQuery: string;
  @Input('searchEvent') searchEvent: string;
  isPopoverShown = false;

  // TODO: temp data
  searchResults = SEARCH_DATA;

  constructor(private router: Router) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchQuery) {
      this.isPopoverShown = changes.searchQuery.currentValue.length > 0;
    }
    if (
      changes.searchEvent &&
      changes.searchEvent.currentValue instanceof Event
    ) {
      this.onSearch();
    }
  }

  onSearch() {
    this.router.navigateByUrl('search');
    this.isPopoverShown = false;
  }
}
