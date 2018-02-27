import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { buildUrlQuery } from '../../utils/helpers';

interface IQuery {
  [key: string]: string;
}

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}

  searchByQuery(query: IQuery) {
    const qs = buildUrlQuery(query);
    const indexName = environment.indexName;
    return this.http.get(`/search/byIndex/${indexName}?${qs}`);
  }
}
