import { Action, createReducer, on } from "@ngrx/store";
import * as AuthorsActions from './authors.actions';

export const AUTHORS_FEATURE_KEY = 'authors';

export interface AuthorsState {
    authors: [],
    addedAuthor: {}
}

export const initialState: AuthorsState = {
    authors: [],
    addedAuthor: {}
}

const reducer = createReducer(
    initialState,
    on(AuthorsActions.requestAuthors, (state) => ({...state})),
    on(AuthorsActions.requestAuthorsSuccess, (state) => ({...state})),
    on(AuthorsActions.requestAuthorsFail, (state) => ({...state})),
    on(AuthorsActions.requestAddAuthor, (state) => ({...state})),
    on(AuthorsActions.requestAddAuthorSuccess, (state) => ({...state})),
    on(AuthorsActions.requestAddAuthorFail, (state) => ({...state})),
    on(AuthorsActions.resetAddedAuthor, (state) => ({...state}))
);

export const authorsReducer = (state: AuthorsState, action: Action): AuthorsState => reducer(state, action);
