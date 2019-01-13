import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowseComponent } from './browse/browse.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowseListComponent } from './browse/browse-list/browse-list.component';
import { FiltersComponent } from './browse/filters/filters.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminNavComponent } from './admin-portal/admin-nav/admin-nav.component';
import { AdminDashboardComponent } from './admin-portal/admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './common/auth-guard.service';
import { AuthGuardAdmin } from "./common/auth-guard-admin.service";
import { AdminNewsComponent } from './admin-portal/admin-news/admin-news.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'unsuccessfulLogin', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'browse', component: BrowseComponent, canActivate: [AuthGuard], children: [
      { path: 'browse-list', component: BrowseListComponent },
      { path: 'filters', component: FiltersComponent },
      { path: 'view-profile/:id', component: ViewProfileComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'admin-portal', component: AdminPortalComponent, canActivate: [AuthGuardAdmin], children: [
      { path: 'admin-nav', component: AdminNavComponent },
      { path: 'admin-dashboard', component: AdminDashboardComponent },
      { path: 'admin-news', component: AdminNewsComponent }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }