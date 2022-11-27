import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoursesModule } from './features/courses/courses.module';
import { LoginModule } from './features/login/login.module';
import { RegistrationModule } from './features/registration/registration.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from './shared/shared.module';
import { appRouting } from './app-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    FontAwesomeModule,
    LoginModule,
    RegistrationModule,
    SharedModule,
    appRouting,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

