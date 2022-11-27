import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CoursesService } from './courses.service';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private _courses = new BehaviorSubject<Course[]>([]);
  private _loadingState = new BehaviorSubject(false);

  isLoading$ = this._loadingState.asObservable();
  courses$: Observable<Course[]> = this._courses.asObservable();

  constructor(private coursesService: CoursesService) { }

  getAllCourses() {
    return this.coursesService.getAllCourses().subscribe(res => this._courses.next(res));
  }

  createCourse(course: Course) {
    return this.coursesService.createCourse(course).subscribe(
      res => {
        const newCourseList = [...this._courses.getValue(), course];
        this._courses.next(newCourseList);
      }
    );
  }

  editCourse(id: any, course: Course) {
    return this.coursesService.editCourse(id, course).subscribe(
      res => {
        const editCourse = this._courses.getValue().filter(c => c.id !== id);        
        const courses = this._courses.getValue().map(c => c.id !== id ? c : course);
        this._courses.next(courses);
      }
    );
  }

  getCourse(id: any) {
    return this.coursesService.getCourse(id).subscribe(
      res => this._courses.next(res)
    );
  }

  deleteCourse(id: any) {
    return this.coursesService.deleteCourse(id).subscribe(
      res => {
        const courses = this._courses.getValue().filter(c => c.id !== id);
        this._courses.next(courses);
      }
    );
  }

  searchCourse(term: string) {
    if (!term.trim()) {
      return of([]);
    }
    return this.coursesService.filterCourse(term).subscribe(
      res => this._courses.next(res)
    );
  }
}
