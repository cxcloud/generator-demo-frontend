import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { buildUrlQuery, getApiUrl } from '../../utils/helpers';
import { ServiceAlias } from '../../types/services';

interface IQuery {
  [key: string]: string;
}

@Injectable()
export class SearchService {
  readonly apiUrl = getApiUrl(ServiceAlias.Search);

  constructor(private http: HttpClient) {}

  searchByQuery(
    query: IQuery,
    indexName: string = environment.commerce.indexName
  ) {
    const qs = buildUrlQuery(query);
    return this.http.get(`${this.apiUrl}/byIndex/${indexName}?${qs}`);
  }
}
