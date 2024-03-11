import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

export const appRoutes: Routes = [
    { path: '',   redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: UserComponent, title: 'Monitor+ :: Login' },
    { path: 'reset', component: ResetPasswordComponent, title: 'Monitor+ :: Password Reset' },
    { path: '**', component: PageNotFoundComponent }
];
