import {Component} from '@angular/core';
import {Team} from "./team";
import {TeamService} from './team.service';
import {OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent implements OnInit {
  constructor(private router: Router, private teamService: TeamService) {
  }

  selectedTeam: Team;
  teams: Team[];

  getTeams(): void {
    this.teamService.getTeams().then(teams => this.teams = teams);
  }

  ngOnInit(): void {
    this.getTeams();
  }

  onSelect(team: Team): void {
    this.selectedTeam = team;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedTeam.id]);
  }
}
