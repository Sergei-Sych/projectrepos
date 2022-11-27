import { Action, createReducer, on } from "@ngrx/store";
import * as CoursesActions from './courses.actions';

export const COURSES_FEATURE_KEY = 'courses';

export interface CoursesState {
    allCourses: [], 
    courses: [],
    course: {},
    isAllCoursesLoading: boolean,
    isSingleCourseLoading: boolean,
    isSearchState: boolean,
    errorMessage: string
}

export const initialState: CoursesState = {
    allCourses: [], 
    courses: [],
    course: {},
    isAllCoursesLoading: false,
    isSingleCourseLoading: false,
    isSearchState: false,
    errorMessage: ''  
}

const reducer = createReducer(
    initialState,
    on(CoursesActions.requestAllCourses, (state) => ({...state})),
    on(CoursesActions.requestAllCoursesSuccess, (state) => ({...state})),
    on(CoursesActions.requestAllCoursesFail, (state) => ({...state})),
    on(CoursesActions.requestSingleCourse, (state) => ({...state})),
    on(CoursesActions.requestSingleCourseSuccess, (state) => ({...state})),
    on(CoursesActions.requestSingleCourseFail, (state) => ({...state})),
    on(CoursesActions.requestFilteredCourses, (state) => ({...state})),
    on(CoursesActions.requestFilteredCoursesSuccess, (state) => ({...state})),
    on(CoursesActions.requestDeleteCourse, (state) => ({...state})),
    on(CoursesActions.requestDeleteCourseFail, (state) => ({...state})),
    on(CoursesActions.requestEditCourse, (state) => ({...state})),
    on(CoursesActions.requestEditCourseSuccess, (state) => ({...state})),
    on(CoursesActions.requestEditCourseFail, (state) => ({...state})),
    on(CoursesActions.requestCreateCourse, (state) => ({...state})),
    on(CoursesActions.requestCreateCourseSuccess, (state) => ({...state})),
    on(CoursesActions.requestCreateCourseFail, (state) => ({...state}))

);

export const coursesReducer = (state: CoursesState, action: Action): CoursesState => reducer(state, action);
