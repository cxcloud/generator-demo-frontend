import { Component, OnInit } from '@angular/core';
import { ContentService } from '../core/content/content.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featured: any;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService
      .getContentByQuery({
        content_type: 'featuredCollection',
        order: 'sys.createdAt'
      })
      .subscribe((result: any) => {
        if (result.total > 0) {
          this.featured = result.items[0].fields;
        }
      });
  }
}
