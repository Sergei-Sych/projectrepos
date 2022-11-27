import { Action, createReducer, on } from '@ngrx/store';
import {requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess} from './user.actions';

export const USER_FEATURE_KEY = 'user';

export interface UserState {
    name: string | null,
    isAdmin?: boolean
}
  
export const initialState: UserState = {
    name: null
};

const reducer = createReducer(
  initialState,
  on(requestCurrentUser, () => ({ ...initialState})),
  on(requestCurrentUserSuccess, (state, action) => ({
    ...state,
    name: action.name,
    isAdmin: action.isAdmin
  })),
  on(requestCurrentUserFail, (state) => ({...state}))
);

export const userReducer = (state: UserState, action: Action): UserState => reducer(state, action);
