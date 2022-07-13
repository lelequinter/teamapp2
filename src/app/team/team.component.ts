import { Component, OnInit, Input } from '@angular/core';
// recibimos la informacion por medio de Input
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  // Desestructuramos team e index de Input
  @Input() team: string[] = [];
  @Input() index = 0;

  constructor() {}

  ngOnInit(): void {}
}
