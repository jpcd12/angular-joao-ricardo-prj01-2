import { Component, OnInit } from '@angular/core';

import { disciplinas6 } from '../disciplinas6';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disciplinas6',
  templateUrl: './disciplinas6.component.html',
  styleUrls: ['./disciplinas6.component.css']
})
export class Disciplinas6Component implements OnInit {
  disciplinas6;

  constructor(private route: ActivatedRoute) { };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.disciplinas6 = disciplinas6[params.get('index')];
    }
    );
  }

}