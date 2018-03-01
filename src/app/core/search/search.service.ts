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
  public query = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient) {}

  get searchQuery() {
    return this.query.getValue();
  }

  updateSearchQuery(query) {
    this.query.next(query);
  }

  searchByQuery(query: IQuery) {
    const qs = buildUrlQuery(query);
    const indexName = environment.indexName;
    return this.http.get(`/search/byIndex/${indexName}?${qs}`);
  }
}
