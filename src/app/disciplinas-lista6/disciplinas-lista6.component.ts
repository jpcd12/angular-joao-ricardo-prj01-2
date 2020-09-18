import { Component, OnInit } from '@angular/core';

import { disciplinas6 } from '../disciplinas6';

@Component({
  selector: 'app-disciplinas-lista6',
  templateUrl: './disciplinas-lista6.component.html',
  styleUrls: ['./disciplinas-lista6.component.css']
})
export class DisciplinasLista6Component implements OnInit {

  list = disciplinas6;

  constructor() { }

  ngOnInit() {
  }

}