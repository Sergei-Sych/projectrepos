import { Inject, Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(@Inject('Window') private window: Window) { }

  setToken(token: string) {
    this.window.sessionStorage.setItem('token', token);
  }

  getToken() {
    return this.window.sessionStorage.getItem('token');
  }

  deleteToken() {
    this.window.sessionStorage.clear();
  }
}
