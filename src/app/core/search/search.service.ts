import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { buildUrlQuery, getApiUrl, SEARCH } from '../../utils/helpers';

interface IQuery {
  [key: string]: string;
}

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}

  searchByQuery(
    query: IQuery,
    indexName: string = environment.commerceIndexName
  ) {
    const qs = buildUrlQuery(query);
    return this.http.get(`${getApiUrl(SEARCH)}/search/byIndex/${indexName}?${qs}`);
  }
}
