import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = "";
  members: string[] = [];

  // Le asignamos el valor del .value de la input a la constante
  onInput(member: string){
    this.newMemberName = member;
  }

  // Agregamos el nuevo nombre al arreglo members
  addMember(){
    this.members.push(this.newMemberName);
    console.log(this.members);
    
  }
}
