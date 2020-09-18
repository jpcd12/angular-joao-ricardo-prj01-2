import { Component, OnInit } from '@angular/core';

import { disciplinas } from '../disciplinas';
import { disciplinas2 } from '../disciplinas2';
import { disciplinas3 } from '../disciplinas3';
import { disciplinas4 } from '../disciplinas4';

@Component({
  selector: 'app-disciplinas-lista',
  templateUrl: './disciplinas-lista.component.html',
  styleUrls: ['./disciplinas-lista.component.css']
})
export class DisciplinasListaComponent implements OnInit {

  list = disciplinas;
  list2 = disciplinas2;
  list3 = disciplinas3;
  list4 = disciplinas4;

  constructor() { }

  ngOnInit() {
  }

}