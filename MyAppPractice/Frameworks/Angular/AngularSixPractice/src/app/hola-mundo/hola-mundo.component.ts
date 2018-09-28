import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

  title = 'Este Component de hola mundo fue generado por CLI automaticamente';

  constructor() { }

  ngOnInit() {
  }

}
