import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from '../models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private REST_API_SERVER = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public getAllAuthors() {
    return this.http.get<Author[]>(this.REST_API_SERVER + '/authors/all');
  }

  public addAuthor(author: any) {
    return this.http.post(this.REST_API_SERVER + '/authors/add', author);
  }
}
