import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewDataComponent } from './view-data/view-data.component';
import { ViewComponent } from './view/view.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ProfileComponent } from './profile/profile.component';
// import { AuthService } from './auth.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
  @NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateTicketComponent,
    CreateUserComponent,
    ViewDataComponent,
    ViewComponent,
    TicketsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
