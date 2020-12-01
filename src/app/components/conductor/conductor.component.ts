import { Component, OnInit } from '@angular/core';
import { ConductoresService } from "../../servicios/conductores.service";

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {

  listaC: any = [];

  constructor(private myConductores: ConductoresService) { }

  ngOnInit(): void {
    this.getListaConductores();
  }

  getListaConductores() {
    this.myConductores.getAllCoductores().subscribe(data => { this.listaC = data; console.log(data) });
  }
}
