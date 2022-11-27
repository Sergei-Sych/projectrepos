import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizedGuard } from 'src/app/auth/guards/authorized.guard';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseEditorComponent } from './course-editor/course-editor.component';
import { CourseComponent } from './course.component';

const routes: Routes = [
  { path: 'add', component: CourseComponent, canLoad: [AuthorizedGuard] }, 
  { path: ':id', component: CourseDetailsComponent, canLoad: [AuthorizedGuard]},
  { path: 'edit/:id', component: CourseEditorComponent, canLoad: [AuthorizedGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
