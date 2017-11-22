import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PagesService {
  constructor(private http: HttpClient) {}

  getPageBySlug(contentType: string, slug: string) {
    return this.http
      .get(`/content?content_type=${contentType}&fields.slug=${slug}`)
      .map((res: any) => {
        if (res.total === 0) {
          throw Observable.throw(new Error(`Page ${slug} has not been found.`));
        }
        return res.items[0].fields;
      });
  }
}
