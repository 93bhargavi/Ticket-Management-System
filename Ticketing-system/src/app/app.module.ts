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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
