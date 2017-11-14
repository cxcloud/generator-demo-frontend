import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService, LocalStorage } from 'ngx-webstorage';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private storage: LocalStorageService) {
    const token = this.storage.retrieve('token');
    if (!token) {
      this.authenticateAnonymously();
    }
  }

  private authenticateAnonymously() {
    // this.http.post(``)
  }
}
