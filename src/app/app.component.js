"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var TEAMS = [
    { id: 10, name: 'Tappara' },
    { id: 11, name: 'Ilves' },
    { id: 12, name: 'TPS' },
    { id: 13, name: 'KalPa' },
    { id: 14, name: 'JYP' },
    { id: 15, name: 'HPK' },
    { id: 16, name: 'Pelicans' },
    { id: 17, name: 'Ässät' },
    { id: 18, name: 'Kärpät' },
    { id: 19, name: 'HIFK' },
    { id: 20, name: 'Lukko' },
    { id: 21, name: 'SaiPa' },
    { id: 22, name: 'Sport' },
    { id: 23, name: 'Kookoo' },
    { id: 24, name: 'Jukurit' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Icehocker team editor';
        this.teams = TEAMS;
    }
    AppComponent.prototype.onSelect = function (team) {
        this.selectedTeam = team;
    };
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <h1>{{title}}</h1>\n  <h2>Teams in 2017 league</h2>\n  <ul class=\"teams\">\n    <li *ngFor=\"let team of teams\"\n     [class.selected]=\"team === selectedTeam\"\n      (click)=\"onSelect(team)\">\n      <span class=\"badge\">{{team.id}}</span> {{team.name}}\n    </li>\n  </ul>\n  <my-team-detail [team]=\"selectedTeam\"></my-team-detail>",
        styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .teams {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .teams li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n  }\n  .teams li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .teams li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .teams .text {\n    position: relative;\n    top: -3px;\n  }\n  .teams .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map