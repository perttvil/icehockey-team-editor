import {Component} from '@angular/core';
import {Team} from "./team";
import {TeamService} from './team.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>Teams in 2017 league</h2>
  <ul class="teams">
    <li *ngFor="let team of teams"
     [class.selected]="team === selectedTeam"
      (click)="onSelect(team)">
      <span class="badge">{{team.id}}</span> {{team.name}}
    </li>
  </ul>
  <my-team-detail [team]="selectedTeam"></my-team-detail>`,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .teams {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .teams li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .teams li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .teams li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .teams .text {
    position: relative;
    top: -3px;
  }
  .teams .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }`],
  providers: [TeamService]
})
export class AppComponent implements OnInit {
  constructor(private teamService: TeamService) {}
  title = 'Icehocker team editor';
  selectedTeam: Team;
  teams: Team[];

  onSelect(team: Team): void {
    this.selectedTeam = team;
  };

  getTeams(): void {
    this.teamService.getTeams().then( teams => this.teams = teams);
  }
  ngOnInit(): void {
    this.getTeams();
  }
}
