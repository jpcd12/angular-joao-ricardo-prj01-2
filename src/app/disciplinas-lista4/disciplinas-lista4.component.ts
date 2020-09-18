import { Component, OnInit } from '@angular/core';

import { disciplinas4 } from '../disciplinas4';

@Component({
  selector: 'app-disciplinas-lista4',
  templateUrl: './disciplinas-lista4.component.html',
  styleUrls: ['./disciplinas-lista4.component.css']
})
export class DisciplinasLista4Component implements OnInit {

  list = disciplinas4;

  constructor() { }

  ngOnInit() {
  }

}