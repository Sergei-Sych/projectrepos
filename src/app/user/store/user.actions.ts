import { createAction, props } from "@ngrx/store";

export const requestCurrentUser = createAction('[User] Current Request');
export const requestCurrentUserSuccess = createAction('[User] Current Request Success', props<{ isAdmin: boolean | undefined, name: string }>());
export const requestCurrentUserFail = createAction('[User] Current Request Fail');
