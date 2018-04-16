import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRouterModule } from './/router.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateComponent } from './create/create.component';
import { UsersComponent } from './users/users.component';
import { EventsService } from './events/events.service';


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    RegistrationComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    NotFoundComponent,
    CreateComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRouterModule,
    HttpClientModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
