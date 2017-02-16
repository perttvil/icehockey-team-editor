import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {AppComponent}  from './app.component';
import {TeamsComponent}  from './teams.component';
import {TeamDetailComponent} from './team-detail.component';
import {TeamService} from "./team.service";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  // My Components
  declarations: [
    AppComponent,
    DashboardComponent,
    TeamsComponent,
    TeamDetailComponent
  ],
  // DI for Services
  providers: [
    TeamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


