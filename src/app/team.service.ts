import {Injectable} from '@angular/core';
import {Team} from "./team";
import {TEAMS} from './mock-teams';

@Injectable()
export class TeamService {
  getTeams(): Promise<Team[]> {
    return Promise.resolve(TEAMS);
  }

  getTeamsSlowly(): Promise<Team[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getTeams()), 2000);
    });
  }

  getTeam(id: number): Promise<Team> {
    return this.getTeams()
      .then(teams => teams.find(team => team.id === id));
  }

}
