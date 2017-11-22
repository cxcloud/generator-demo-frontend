import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PagesService } from '../pages.service';

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
    private pageService: PagesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params.pageId) {
        return this.router.navigateByUrl('/');
      }
      this.pageService
        .getPageBySlug('staticPage', params.pageId)
        .subscribe(page => (this.pageData = page));
    });
  }

  getBackgroundImage() {
    return `url(https:${this.pageData.coverPhoto.fields.file.url})`;
  }
}
