import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { TicketsComponent } from './tickets/tickets.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
                        {path:"",component:LoginComponent},
                        {path:"create-user",component:CreateUserComponent},
                        {path:"create-ticket",component:CreateTicketComponent},
                        {path:"profile",component:ProfileComponent},
                        {path:"tickets",component:TicketsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
