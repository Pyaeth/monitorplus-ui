import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { profileGuard } from './services/auth-guard.service';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

export const appRoutes: Routes = [
    { path: '', component: WelcomePageComponent, canActivate: [profileGuard] },
    { path: 'login', component: UserComponent, title: 'Monitor+ :: Login' },
    { path: 'reset', component: ResetPasswordComponent, title: 'Monitor+ :: Password Reset' },
    { path: 'dashboard', component: DashboardComponent, canActivate: [profileGuard], title: 'Monitor+ :: Home' },
    { path: 'user-details', component: UserDetailsComponent, canActivate: [profileGuard],  title: 'Monitor+ :: My Profile' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }