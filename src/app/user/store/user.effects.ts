import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, switchMap } from "rxjs";
import { UserService } from "../services/user.service";
import { requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess } from "./user.actions";

@Injectable()
export class UserEffects {

    getCurrentUser$ = createEffect(() => this.actions$.pipe(
        ofType(requestCurrentUser),
        switchMap(() => this.userService.getUser().pipe(
            map(data => requestCurrentUserSuccess({name: data.name, isAdmin: data.isAdmin})),
            catchError(async () => requestCurrentUserFail)
        ))
        )
    );    

    constructor(private actions$: Actions, private userService: UserService) {}
}
