import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseRoutingModule } from './course-routing.module';

@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }

