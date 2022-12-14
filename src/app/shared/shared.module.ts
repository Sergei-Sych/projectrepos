import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import {  CourseCardComponent} from './components/course-card/course-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseListComponent, } from './components/course-list/course-list.component';
import { HourMinutes } from './hour-minute.pipe';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';



const COMPONENTS = [ 
  HeaderComponent, ButtonComponent, SearchComponent, 
  InfoComponent, CourseCardComponent, CourseListComponent,
  CourseFormComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    HourMinutes,
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule {}


