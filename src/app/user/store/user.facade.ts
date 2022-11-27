import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { requestCurrentUser } from "./user.actions";
import { CurrentState, getName, isAdmin } from "./user.selectors";

@Injectable()
export class UserStateFacade {
    name$ = this.store.pipe(select(getName));
    isAdmin$ = this.store.pipe(select(isAdmin));

    constructor(private store: Store<CurrentState>) {}

    getCurrentUser(): void {
        this.store.dispatch(requestCurrentUser());
    }
}
