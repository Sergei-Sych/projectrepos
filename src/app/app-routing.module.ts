import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'registration',
        loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule)
    },
    {
        path: 'courses',
        loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule)
    },
    {
        path: 'courses/add',
        loadChildren: () => import('./features/course/course.module').then(m => m.CourseModule)
    },
    {
        path: 'courses/:id',
        loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule)
    },
    {
        path: 'courses/edit/:id',
        loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule)
    },
    {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
    }
];

export const appRouting = RouterModule.forRoot(appRoutes);
