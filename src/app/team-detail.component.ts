import {Component, Input} from '@angular/core';
import {Team} from "./team";

@Component({
  selector: 'my-team-detail',
  template: `
  <div *ngIf="team">
    <h2>Icehockey team {{team.name}}</h2>
    <div><label>id: </label>{{team.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="team.name" placeholder="name"/>
    </div>
  </div>`
})
export class TeamDetailComponent {
  @Input()
  team: Team;
}
