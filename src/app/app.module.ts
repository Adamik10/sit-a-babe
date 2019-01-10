import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule, 
  MatTabsModule, MatStepperModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule  } from '@angular/material';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowseComponent } from './browse/browse.component';
import { ProfileComponent } from './profile/profile.component';
import { BrowseListComponent } from './browse/browse-list/browse-list.component';
import { FiltersComponent } from './browse/filters/filters.component';

import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { userService } from './common/user.service';
import { customFormValidators } from './common/formValidators';


export const firebaseConfig = environment.firebase;

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    BrowseComponent,
    ProfileComponent,
    BrowseListComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule, 
    MatTabsModule, MatStepperModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [userService, customFormValidators],
  bootstrap: [AppComponent]
})

export class AppModule { }
