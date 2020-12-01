import { Component, OnInit } from '@angular/core';
import { CamionesService } from "../../servicios/camiones.service";
import { Camiones } from "../../interfaces/camiones";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-camiones',
  templateUrl: './camiones.component.html',
  styleUrls: ['./camiones.component.css']
})
export class CamionesComponent implements OnInit {
  listacamiones: any = [];
  selectCamion: Camiones = new Camiones();

  constructor(private camionservice: CamionesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getlistaCamiones();
  }

  getlistaCamiones() {
    this.camionservice.getAllCamiones().subscribe(data => { this.listacamiones = data; console.log('Mostrando Lista') });
  }

  borrarCamion(id: string) {
    this.camionservice.borrarCamion(id).subscribe(
      resp => {
        this.camionservice.getAllCamiones().subscribe(data => { this.listacamiones = data; console.log(id) });
      }
    );
  }
}
