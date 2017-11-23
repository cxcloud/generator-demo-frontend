import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

interface IQuery {
  [key: string]: string;
}

@Injectable()
export class ContentService {
  constructor(private http: HttpClient) {}

  getContentByQuery(query: IQuery) {
    const qs = Object.keys(query)
      .map(key => `${key}=${query[key]}`)
      .join('&');
    return this.http.get(`/content?${qs}`);
  }

  getContentBySlug(contentType: string, slug: string) {
    return this.getContentByQuery({
      content_type: contentType,
      'fields.slug': slug
    }).map((res: any) => {
      if (res.total === 0) {
        throw Observable.throw(new Error(`Page ${slug} has not been found.`));
      }
      return res.items[0].fields;
    });
  }
}
