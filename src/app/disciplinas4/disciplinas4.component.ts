import { Component, OnInit } from '@angular/core';

import { disciplinas4 } from '../disciplinas4';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplinas4',
  templateUrl: './disciplinas4.component.html',
  styleUrls: ['./disciplinas4.component.css']
})
export class Disciplinas4Component implements OnInit {
  disciplinas4;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.disciplinas4 = disciplinas4[params.get('index')];
    }
    );
  }

}