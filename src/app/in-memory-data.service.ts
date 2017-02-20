import {InMemoryDbService} from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let teams = [
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
      {id: 24, name: 'Jukurit'},
    ];
    return {teams};
  }
}
