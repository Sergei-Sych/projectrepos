import { RouterModule, Routes } from "@angular/router";
import { AuthorizedGuard } from "./auth/guards/authorized.guard";
import { NotAuthorizedGuard } from "./auth/guards/not-authorized.guard";

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule), canActivate: [NotAuthorizedGuard]
    },
    {
        path: 'registration',
        loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule), canActivate: [NotAuthorizedGuard]
    },
    {
        path: 'courses',
        loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule), canLoad: [AuthorizedGuard]
    },
    {
        path: 'courses',
        loadChildren: () => import('./features/course/course.module').then(m => m.CourseModule), canLoad: [AuthorizedGuard]
    },
    {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
    }
];

export const appRouting = RouterModule.forRoot(appRoutes);
