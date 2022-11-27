import { createAction, props } from "@ngrx/store";
import { Course } from "src/app/shared/course.model";

export const requestAllCourses = createAction('[Course] Request All');
export const requestAllCoursesSuccess = createAction('[Course] Request All Success', props<{courses: any}>());
export const requestAllCoursesFail = createAction('[Course] Request All Fail');
export const requestSingleCourse = createAction('[Course] Request Single', props<{id: any}>());
export const requestSingleCourseSuccess = createAction('[Course] Request Single Success', props<{course: any}>());
export const requestSingleCourseFail = createAction('[Course] Request Single Fail');
export const requestFilteredCourses = createAction('[Course] Request Filtered', props<{searchValue: string}>());
export const requestFilteredCoursesSuccess = createAction('[Course] Request Filtered Success', props<{courses: any}>());
export const requestDeleteCourse = createAction('[Course] Request Delete', props<{id: any}>());
export const requestDeleteCourseFail = createAction('[Course] Request Delete');
export const requestEditCourse = createAction('[Course] Request Edit', props<{body: any, id: any}>());
export const requestEditCourseSuccess = createAction('[Course] Request Edit Success', props<{course: any}>());
export const requestEditCourseFail = createAction('[Course] Request Edit Fail');
export const requestCreateCourse = createAction('[Course] Request Create', props<{body: any}>());
export const requestCreateCourseSuccess = createAction('[Course] Request Create Success', props<{course: any}>());
export const requestCreateCourseFail = createAction('[Course] Request Create Fail');
