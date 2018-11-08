import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError as observableThrowError } from 'rxjs';
import { map } from 'rxjs/operators';
import { getApiUrl } from '../../utils/helpers';
import { ServiceAlias } from '../../types/services';

const apiUrl = getApiUrl(ServiceAlias.Content);

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
    return this.http.get(`${apiUrl}/content?${qs}`);
  }

  getContentBySlug(contentType: string, slug: string) {
    return this.getContentByQuery({
      content_type: contentType,
      'fields.slug': slug
    }).pipe(
      map((res: any) => {
        if (res.total === 0) {
          throw observableThrowError(new Error(`Page ${slug} has not been found.`));
        }
        return res.items[0].fields;
      })
    );
  }
}
