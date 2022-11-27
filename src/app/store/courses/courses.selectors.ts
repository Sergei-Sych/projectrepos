import { createSelector } from "@ngrx/store";
import { CoursesState } from "./courses.reducer";

export interface CurrentState {
    courses: CoursesState
}

export const featureState = (state: CurrentState) => state.courses;

export const isAllCoursesLoadingSelector = createSelector(featureState, state => state.isAllCoursesLoading);
export const isSearchingStateSelector = createSelector(featureState, state => state.isSearchState);
export const isSingleCourseLoadingSelector = createSelector(featureState, state => state.isSingleCourseLoading);
export const getCourses = createSelector(featureState, state => state.courses);
export const getAllCourses = createSelector(featureState, state => state.allCourses);
export const getCourse = createSelector(featureState, state => state.course);
export const getErrorMessage = createSelector(featureState, state => state.errorMessage);
