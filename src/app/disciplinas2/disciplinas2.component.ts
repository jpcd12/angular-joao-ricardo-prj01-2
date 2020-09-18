import { Component, OnInit } from '@angular/core';

import { disciplinas2 } from '../disciplinas2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplinas2',
  templateUrl: './disciplinas2.component.html',
  styleUrls: ['./disciplinas2.component.css']
})
export class Disciplinas2Component implements OnInit {
  disciplinas2;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.disciplinas2 = disciplinas2[params.get('index')];
    }
    );
  }

}