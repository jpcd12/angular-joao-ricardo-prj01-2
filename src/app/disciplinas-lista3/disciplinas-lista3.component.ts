import { Component, OnInit } from '@angular/core';

import { disciplinas3 } from '../disciplinas3';

@Component({
  selector: 'app-disciplinas-lista3',
  templateUrl: './disciplinas-lista3.component.html',
  styleUrls: ['./disciplinas-lista3.component.css']
})
export class DisciplinasLista3Component implements OnInit {

  list = disciplinas3;

  constructor() { }

  ngOnInit() {
  }

}