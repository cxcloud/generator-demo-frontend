import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-popover',
  templateUrl: './search-popover.component.html',
  styleUrls: ['./search-popover.component.scss']
})
export class SearchPopoverComponent implements OnInit {
  @Input('searchResults') searchResults: any;
  constructor(private router: Router) {}

  ngOnInit() {}

  onSearch() {
    this.router.navigateByUrl('search');
  }
}
