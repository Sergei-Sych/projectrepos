import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { requestAllCourses, requestCreateCourse, requestDeleteCourse, requestEditCourse, requestFilteredCourses, requestSingleCourse } from "./courses.actions";
import { 
    CurrentState,
    getAllCourses,
    getCourse,
    getCourses,
    getErrorMessage,
    isAllCoursesLoadingSelector,
    isSearchingStateSelector,
    isSingleCourseLoadingSelector
} from "./courses.selectors";

@Injectable()
export class CoursesStateFacade {

    isAllCoursesLoading$ = this.store.pipe(select(isAllCoursesLoadingSelector));
    isSingleCourseLoading$ = this.store.pipe(select(isSingleCourseLoadingSelector));
    isSearchingState$ = this.store.pipe(select(isSearchingStateSelector));
    courses$ = this.store.pipe(select(getCourses));
    allCourses$ = this.store.pipe(select(getAllCourses));
    course$ = this.store.pipe(select(getCourse));
    errorMessage$ = this.store.pipe(select(getErrorMessage));

    constructor(private store: Store<CurrentState>) {}

    getAllCourses() {
        this.store.dispatch(requestAllCourses());
    }

    getSingleCourse(id: any) {
        this.store.dispatch(requestSingleCourse({id}));
    }

    getFilteredCourses(searchValue: string) {
        this.store.dispatch(requestFilteredCourses({searchValue}));
    }

    editCourse(body: any, id: any) {
        this.store.dispatch(requestEditCourse({body, id}));
    }

    createCourse(body: any) {
        this.store.dispatch(requestCreateCourse({body}));
    }

    deleteCourse(id: any) {
        this.store.dispatch(requestDeleteCourse({id}));
    }
}
