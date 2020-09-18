import { Component, OnInit } from '@angular/core';

import { disciplinas2 } from '../disciplinas2';

@Component({
  selector: 'app-disciplinas-lista2',
  templateUrl: './disciplinas-lista2.component.html',
  styleUrls: ['./disciplinas-lista2.component.css']
})
export class DisciplinasLista2Component implements OnInit {

  list = disciplinas2;

  constructor() { }

  ngOnInit() {
  }

}