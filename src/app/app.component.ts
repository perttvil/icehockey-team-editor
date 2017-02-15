import {Component} from '@angular/core';

export class Team {
  id: number;
  name: string;
}

const TEAMS: Team[] = [
  {id: 10, name: 'Tappara'},
  {id: 11, name: 'Ilves'},
  {id: 12, name: 'TPS'},
  {id: 13, name: 'KalPa'},
  {id: 14, name: 'JYP'},
  {id: 15, name: 'HPK'},
  {id: 16, name: 'Pelicans'},
  {id: 17, name: 'Ässät'},
  {id: 18, name: 'Kärpät'},
  {id: 19, name: 'HIFK'},
  {id: 20, name: 'Lukko'},
  {id: 21, name: 'SaiPa'},
  {id: 22, name: 'Sport'},
  {id: 23, name: 'Kookoo'},
  {id: 24, name: 'Jukurit'}
];

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <div *ngIf="selectedTeam">
    <h2>Details of {{selectedTeam.name}}</h2>
    <div><label>id: </label>{{selectedTeam.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="selectedTeam.name" placeholder="name">
    </div>
  </div>
  <h2>My Teams</h2>
  <ul class="teams">
    <li *ngFor="let team of teams"
     [class.selected]="team === selectedTeam"
      (click)="onSelect(team)">
      <span class="badge">{{team.id}}</span> {{team.name}}
    </li>
  </ul>`,
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
  }
`]
})

export class AppComponent {
  title = 'Icehocker team editor';
  selectedTeam: Team;
  teams = TEAMS;

  onSelect(team: Team): void {
    this.selectedTeam = team;
  };
}
