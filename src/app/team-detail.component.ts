import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';
import {TeamService} from './team.service';
import {Team} from "./team";
import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'my-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
})
export class TeamDetailComponent implements OnInit {
  team: Team;

  constructor(private teamService: TeamService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.teamService.getTeam(+params['id']))
      .subscribe(team => this.team = team);
  }

  goBack(): void {
    this.location.back();
  }
}
