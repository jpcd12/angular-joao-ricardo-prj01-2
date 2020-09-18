import { Component, OnInit } from '@angular/core';

import { disciplinas3 } from '../disciplinas3';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplinas3',
  templateUrl: './disciplinas3.component.html',
  styleUrls: ['./disciplinas3.component.css']
})
export class Disciplinas3Component implements OnInit {
  disciplinas3;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.disciplinas3 = disciplinas3[params.get('index')];
    }
    );
  }

}