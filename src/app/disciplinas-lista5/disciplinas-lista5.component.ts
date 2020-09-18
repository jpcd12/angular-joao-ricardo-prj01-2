import { Component, OnInit } from '@angular/core';

import { disciplinas5 } from '../disciplinas5';

@Component({
  selector: 'app-disciplinas-lista5',
  templateUrl: './disciplinas-lista5.component.html',
  styleUrls: ['./disciplinas-lista5.component.css']
})
export class DisciplinasLista5Component implements OnInit {

  list = disciplinas5;

  constructor() { }

  ngOnInit() {
  }

}