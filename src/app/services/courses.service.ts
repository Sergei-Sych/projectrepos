import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private REST_API_SERVER = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public getAllCourses() {
    return this.http.get<Course[]>(this.REST_API_SERVER + '/courses/all');
  }

  public createCourse(course: any) {
    return this.http.post(this.REST_API_SERVER + '/courses/add', JSON.stringify(course));
  }

  public editCourse(id: any, course: any) {
    return this.http.put(this.REST_API_SERVER + '/courses/' + id, JSON.stringify(course));
  }

  public getCourse(id: any) {
    return this.http.get<Course[]>(this.REST_API_SERVER + '/courses/' + id);
  }

  public deleteCourse(id: any) {
    return this.http.delete(this.REST_API_SERVER + '/courses/' + id);
  }

  public filterCourse(term: string) {
    return this.http.get<Course[]>(this.REST_API_SERVER + `/courses/filter?title=${term}`);
  }
}
