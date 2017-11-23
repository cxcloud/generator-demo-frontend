import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContentService } from '../../core/content/content.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  pageData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pageService: ContentService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params.pageId) {
        return this.router.navigateByUrl('/');
      }
      this.pageService
        .getContentBySlug('staticPage', params.pageId)
        .subscribe(page => (this.pageData = page));
    });
  }

  getBackgroundImage() {
    return `url(https:${this.pageData.coverPhoto.fields.file.url})`;
  }
}
