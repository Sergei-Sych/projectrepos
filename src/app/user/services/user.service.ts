import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private REST_API_SERVER = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public getUser() {
    return this.http.get<User>(this.REST_API_SERVER + '/users/me');
  }
}
