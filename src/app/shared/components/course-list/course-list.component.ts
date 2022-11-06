import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  @Input() courses!: object[];
  @Input() isEditable = false;

  @Output() editCourses = new EventEmitter();
  
}
