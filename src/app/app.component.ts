import { Component } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | '' = '';
  teams: string[][] = [];

  // Le asignamos el valor del .value de la input a la constante
  onInput(member: string) {
    this.newMemberName = member;
  }

  // Metodo para la captura del numero de Teams
  onNumberOfTeamsInput(value: string) {
    this.numberOfTeams = Number(value);
  }

  // Agregamos el nuevo nombre al arreglo members
  addMember() {
    // Verificacion de string vacio, si el string está vacío no añade al members
    if (!this.newMemberName) {
      this.errorMessage = "Name can't be empty";
      return;
    }

    this.members.push(this.newMemberName);
    this.newMemberName = '';
    this.errorMessage = '';
  }

  // Metodo para generar la cantidad de Teams indicados
  generateTeams() {
    if (!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = 'Invalid number of teams';
      return;
    }

    if (this.members.length < this.numberOfTeams) {
      this.errorMessage = 'Not enough members';
      return;
    }

    this.errorMessage = '';
    const allMembers = [...this.members];

    while (allMembers.length) {
      for (let i = 0; i < this.numberOfTeams; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        // console.log(randomIndex);
        const member = allMembers.splice(randomIndex, 1)[0];
        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
        // console.log(this.teams);
      }
    }

    this.members = [];
    this.numberOfTeams = '';
  }
}
