import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Author } from "src/app/models/author.model";
import { requestAddAuthor, requestAuthors } from "./authors.actions";
import { CurrentState, getAddedAuthors, getAuthors } from "./authors.selectors";

@Injectable()
export class AuthorsStateFacade {

    addedAuthor$ = this.store.pipe(select(getAddedAuthors));
    authors$ = this.store.pipe(select(getAuthors));

    constructor(private store: Store<CurrentState>) {}

    getAuthors() {
        this.store.dispatch(requestAuthors());
    }

    addAuthor(author: Author) {
        this.store.dispatch(requestAddAuthor({author}));
    }
}
