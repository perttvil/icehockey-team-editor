import 'rxjs/add/operator/toPromise';
import {Team} from "./team";
import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";

@Injectable()
export class TeamService {
  private teamsUrl = 'api/teams';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getTeams(): Promise<Team[]> {
    // This calls InMemoryDataService which is registered in
    // app.module.ts which mocks the real http get request.
    return this.http.get(this.teamsUrl)
      .toPromise()
      .then(response => response.json().data as Team[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  update(team: Team): Promise<Team> {
    const url = `${this.teamsUrl}/${team.id}`;
    return this.http
      .put(url, JSON.stringify(team), {headers: this.headers})
      .toPromise()
      .then(() => team)
      .catch(this.handleError);
  }

  create(name: string): Promise<Team> {
    return this.http
      .post(this.teamsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.teamsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
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
