import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { Disciplinas2Component } from './disciplinas2/disciplinas2.component';
import { Disciplinas3Component } from './disciplinas3/disciplinas3.component';
import { Disciplinas4Component } from './disciplinas4/disciplinas4.component';
import { Disciplinas5Component } from './disciplinas5/disciplinas5.component';
import { SobreComponent } from './sobre/sobre.component';
import { DisciplinasListaComponent } from './disciplinas-lista/disciplinas-lista.component';
import { DisciplinasLista2Component } from './disciplinas-lista2/disciplinas-lista2.component';
import { DisciplinasLista3Component } from './disciplinas-lista3/disciplinas-lista3.component';
import { DisciplinasLista4Component } from './disciplinas-lista4/disciplinas-lista4.component';
import { DisciplinasLista5Component } from './disciplinas-lista5/disciplinas-lista5.component';
import { DisciplinasDetalhesComponent } from './disciplinas-detalhes/disciplinas-detalhes.component';
import { MediasComponent } from './medias/medias.component';
import { Disciplinas6Component } from './disciplinas6/disciplinas6.component';
import { DisciplinasLista6Component } from './disciplinas-lista6/disciplinas-lista6.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: SobreComponent},
      {path: 'disciplinas', component: DisciplinasListaComponent},
      {path: 'disciplinas2', component: DisciplinasLista2Component},
      {path: 'disciplinas3', component: DisciplinasLista3Component},
      {path: 'disciplinas4', component: DisciplinasLista4Component},
      {path: 'disciplinas5', component: DisciplinasLista5Component},
      {path: 'disciplinas6', component: DisciplinasLista6Component},
      {path: 'disciplinas/:index', component: DisciplinasComponent},
      {path: 'disciplinas2/:index', component: Disciplinas2Component},
      {path: 'disciplinas3/:index', component: Disciplinas3Component},
      {path: 'disciplinas4/:index', component: Disciplinas4Component},
      {path: 'disciplinas5/:index', component: Disciplinas5Component},
     {path: 'disciplinas6/:index', component: Disciplinas6Component},
      {path: 'disciplinasdetalhes', component: DisciplinasDetalhesComponent},
      {path: 'medias', component: MediasComponent}
      ])
    ],
  declarations: [ AppComponent, HelloComponent, DisciplinasComponent, Disciplinas2Component, Disciplinas3Component, Disciplinas4Component, SobreComponent, DisciplinasListaComponent, DisciplinasLista2Component, DisciplinasLista3Component, DisciplinasLista4Component, DisciplinasDetalhesComponent, MediasComponent, DisciplinasLista5Component, Disciplinas5Component, Disciplinas6Component, DisciplinasLista6Component],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }