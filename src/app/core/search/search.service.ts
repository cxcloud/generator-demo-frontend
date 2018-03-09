import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../../environments/environment';
import { buildUrlQuery } from '../../utils/helpers';

interface IQuery {
  [key: string]: string;
}

@Injectable()
export class SearchService {
  public results = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  get searchResults() {
    return this.results.getValue();
  }

  searchByQuery(query: IQuery, indexName: string = environment.indexName) {
    const qs = buildUrlQuery(query);
    return this.http.get(`/search/byIndex/${indexName}?${qs}`);
  }
}
