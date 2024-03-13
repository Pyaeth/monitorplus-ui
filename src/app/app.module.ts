import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { LoginComponent } from './components/login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import { ConfirmationService } from 'primeng/api';
import { NewUserComponent } from './components/new-user/new-user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserComponent } from './components/user/user.component';
import { CommonModule } from '@angular/common';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RippleModule } from 'primeng/ripple';
import { AppRoutingModule } from './app-routing.module';
import { appRoutes } from './app.routes';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { PaginatorModule } from 'primeng/paginator';
import { AuthenticationService } from './services/authentication.service';
import { DockModule } from 'primeng/dock';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { HeaderComponent } from './components/header/header.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { MenubarModule } from 'primeng/menubar';
import { MonthSummaryComponent } from './components/month-summary/month-summary.component';
import { TableModule } from 'primeng/table';
import { DaySummaryComponent } from './components/month-summary/day-summary/day-summary.component';


@NgModule({
    declarations: [AppComponent,
        UserComponent, LoginComponent, NewUserComponent,
        ResetPasswordComponent,
        PageNotFoundComponent,
        UserDetailsComponent,
        DashboardComponent,
        WelcomePageComponent,
        HeaderComponent,
        MonthSummaryComponent,
        DaySummaryComponent
    ],
    imports: [RouterOutlet,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        RouterModule.forRoot(
            appRoutes,
            { onSameUrlNavigation: 'reload',
            useHash: false }
        ),
        FormsModule,
        SplitterModule,
        DropdownModule,
        MessagesModule,
        RouterModule,
        CardModule,
        HttpClientModule,
        DividerModule,
        PasswordModule,
        ReactiveFormsModule,
        InputTextModule,
        ButtonModule,
        CommonModule,
        RippleModule,
        DockModule,
        AvatarModule,
        AvatarGroupModule,
        AnimateOnScrollModule,
        MenubarModule,
        TableModule
    ],
    providers: [HttpService, ConfirmationService, AuthenticationService],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {}