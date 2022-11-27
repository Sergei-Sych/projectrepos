import { createAction, props } from "@ngrx/store";
import { Author } from "src/app/models/author.model";

export const requestAuthors = createAction('[Author] Get Request');
export const requestAuthorsSuccess = createAction('[Author] Get Request Success', props<{authors: Author[]}>());
export const requestAuthorsFail = createAction('[Author] Get Request Fail');
export const requestAddAuthor = createAction('[Author] Add Request', props<{author: Author}>());
export const requestAddAuthorSuccess = createAction('[Author] Add Request Success', props<{author: Author}>());
export const requestAddAuthorFail = createAction('[Author] Add Request Fail');
export const resetAddedAuthor = createAction('[Author] Reset Added');
