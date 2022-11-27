import { createSelector } from "@ngrx/store";
import { AuthorsState } from "./authors.reducer";

export interface CurrentState {
    authors: AuthorsState
}

export const featureState = (state: CurrentState) => state.authors;

export const getAddedAuthors = createSelector(featureState, state => state.addedAuthor);
export const getAuthors = createSelector(featureState, state => state.authors);
