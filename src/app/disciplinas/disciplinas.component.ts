import { Component, OnInit } from '@angular/core';

import { disciplinas } from '../disciplinas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  disciplinas;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.disciplinas = disciplinas[params.get('index')];
    }
    );
  }

}