import { Component, OnInit } from '@angular/core';

import { disciplinas5 } from '../disciplinas5';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplinas5',
  templateUrl: './disciplinas5.component.html',
  styleUrls: ['./disciplinas5.component.css']
})
export class Disciplinas5Component implements OnInit {
  disciplinas5;

  constructor(private route: ActivatedRoute) { };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.disciplinas5 = disciplinas5[params.get('index')];
    }
    );
  }

}