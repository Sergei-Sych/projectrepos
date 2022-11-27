import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap, tap, withLatestFrom } from "rxjs";
import { CoursesService } from "src/app/services/courses.service";
import { AuthorsStateFacade } from "../authors/authors.facade";
import * as CoursesActions from './courses.actions';
import { CoursesStateFacade } from "./courses.facade";

@Injectable()
export class CoursesEffects {

    getAll$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestAllCourses),
        switchMap(() => this.coursesService.getAllCourses().pipe(
            map(courses => CoursesActions.requestAllCoursesSuccess({courses: courses})),
            catchError(async () => CoursesActions.requestAllCoursesFail)
        ))
    ));

    filteredCourses$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestFilteredCourses),
        withLatestFrom(this.coursesStateFacade.allCourses$),
        switchMap(value => this.coursesService.filterCourse(value).pipe(
            map(courses => CoursesActions.requestFilteredCoursesSuccess({courses: courses}))
        ))
    ));

    getSpecificCourse$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestSingleCourse),
        withLatestFrom(this.authorsStateFacade.authors$),
        map(([{ id }, authors]) => id.filter((id: never) => !authors.includes(id))),
        switchMap((id) => this.coursesService.getCourse(id).pipe(
            map(course => CoursesActions.requestSingleCourseSuccess({course})),
            catchError(async () => CoursesActions.requestSingleCourseFail)
        ))
    ));

    deleteCourse$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestDeleteCourse),
        switchMap(data => this.coursesService.deleteCourse(data).pipe(
            map(course => CoursesActions.requestCreateCourseSuccess({course: course})),
            catchError(async () => CoursesActions.requestDeleteCourseFail)
        ))
    ));

    editCourse$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestEditCourse),
        switchMap((id, data) => this.coursesService.editCourse(id, data).pipe(
            map(course => CoursesActions.requestEditCourseSuccess({course: course})),
            catchError(async () => CoursesActions.requestEditCourseFail)
        ))
    ));

    createCourse$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestCreateCourse),
        switchMap(data => this.coursesService.createCourse(data).pipe(
            map(course => CoursesActions.requestCreateCourseSuccess({course: course})),
            catchError(async () => CoursesActions.requestCreateCourseFail)
        ))
    ));

    redirectToTheCoursesPage$ = createEffect(() => this.actions$.pipe(
        ofType(CoursesActions.requestCreateCourseSuccess, 
            CoursesActions.requestEditCourseSuccess,
            CoursesActions.requestSingleCourseFail),
        tap(() => this.router.navigate(['/']))
    ), { dispatch: false });

    constructor(
        private actions$: Actions, 
        private coursesService: CoursesService, 
        private authorsStateFacade: AuthorsStateFacade,
        private router: Router,
        private coursesStateFacade: CoursesStateFacade
    ) {}
}
