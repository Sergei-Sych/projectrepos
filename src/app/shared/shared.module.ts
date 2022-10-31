import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    InfoComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
  COMPONENTS = [];
}

