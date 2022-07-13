import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';

  // Le asignamos el valor del .value de la input a la constante
  onInput(member: string) {
    this.newMemberName = member;
  }

  // Agregamos el nuevo nombre al arreglo members
  addMember() {
    // Verificacion de string vacio, si el string está vacío no añade al members
    if(!this.newMemberName){
      this.errorMessage =  "Name can't be empty"
      return
    }

    this.members.push(this.newMemberName);
    this.newMemberName = '';
    this.errorMessage = '';
  }
}
