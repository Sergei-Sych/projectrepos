import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs";
import { AuthorsService } from "src/app/services/authors.service";
import * as AuthorsActions from './authors.actions';

@Injectable()
export class AuthorsEffects {

    getAuthors$ = createEffect(() => this.actions$.pipe(
        ofType(AuthorsActions.requestAuthors),
        switchMap(() => this.authorsService.getAllAuthors().pipe(
            map(authors => AuthorsActions.requestAuthorsSuccess({authors: authors})),
            catchError(async () => AuthorsActions.requestAuthorsFail)
        ))
    ));

    addAuthor$ = createEffect(() => this.actions$.pipe(
        ofType(AuthorsActions.requestAddAuthor),
        switchMap((author) => this.authorsService.addAuthor(author).pipe(
            map(author => AuthorsActions.requestAddAuthorSuccess({author: author})),
            catchError(async () => AuthorsActions.requestAddAuthorFail)
        ))
    ));

    constructor(private actions$: Actions, private authorsService: AuthorsService) {}
}
