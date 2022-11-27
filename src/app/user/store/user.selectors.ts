import { createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export interface CurrentState {
    user: UserState
}

export const featureState = (state: CurrentState) => state.user;

export const getName = createSelector(featureState, state => state.name);
export const isAdmin = createSelector(featureState, state => state.isAdmin);
