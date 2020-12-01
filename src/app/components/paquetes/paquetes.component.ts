import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaquetesService } from 'src/app/servicios/paquetes.service';


@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {

  listPacquete: any = [];

  constructor(private paqueteService: PaquetesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getlistPaquetes();
  }

  getlistPaquetes() {
    this.paqueteService.getAllPaquetes().subscribe(data => { this.listPacquete = data; console.log('Mostrando Lista Paquetes') })
  }
  borrarPaquete(id: string) {
    this.paqueteService.borrarCamion(id).subscribe(
      resp => {
        this.paqueteService.getAllPaquetes().subscribe(data => { this.listPacquete = data; console.log(id) });
      }
    );
  }
}
