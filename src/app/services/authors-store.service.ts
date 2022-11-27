import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Author } from '../models/author.model';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {
  private _authors = new BehaviorSubject<Author[]>([]);
  private _loadingState = new BehaviorSubject(false);

  isLoading$ = this._loadingState.asObservable();
  authors$: Observable<Author[]> = this._authors.asObservable();

  constructor(private authorService: AuthorsService) { }

  getAllAuthors() {
    return this.authorService.getAllAuthors().subscribe(
      res => this._authors.next(res)
      );
  }

  addAuthor(author: Author) {
    return this.authorService.addAuthor(author).subscribe(
      res => {
        const newAuthorsList = [...this._authors.getValue(), author];
        this._authors.next(newAuthorsList);
      }
    );
  }
}
