import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';

import {AppRoutingModule} from "./app-routing.module";

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import {AppComponent}  from './app.component';
import {TeamsComponent}  from './teams.component';
import {TeamDetailComponent} from './team-detail.component';
import {TeamService} from "./team.service";
import {TeamSearchComponent} from "./team-search.component";
import {TeamSearchService} from "./team-search.service";
import {DashboardComponent} from "./dashboard.component";


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  // My Components
  declarations: [
    AppComponent,
    DashboardComponent,
    TeamsComponent,
    TeamDetailComponent,
    TeamsComponent,
    TeamSearchComponent,
  ],
  // DI for Services
  providers: [TeamService, TeamSearchService],
  bootstrap: [AppComponent],
})
export class AppModule {
}


