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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreationDate } from './pipes/create-date.pipe';
import { StringJoiner } from './pipes/string-joiner.pipe';



const COMPONENTS = [ 
  HeaderComponent, ButtonComponent, SearchComponent, 
  InfoComponent, CourseCardComponent, CourseListComponent,
  CourseFormComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    HourMinutes,
    CreationDate,
    StringJoiner
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [...COMPONENTS]
})
export class SharedModule {}


