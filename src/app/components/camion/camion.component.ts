import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CamionesService } from 'src/app/servicios/camiones.service';
import { CamionModel } from "../../models/Camion.model";



@Component({
  selector: 'app-camion',
  templateUrl: './camion.component.html',
  styleUrls: ['./camion.component.css']
})
export class CamionComponent implements OnInit {
  camion: CamionModel = new CamionModel();

  constructor(private camionserv: CamionesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id: string = this.route.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this.camionserv.getCamion(id).subscribe(
        (resp: any) => {
          this.camion = resp;
          this.camion.id = resp._id;
          console.log(resp);
        }
      );
    }
  }

  guardar(form: NgForm) {
    if (form.invalid) {
      console.log('Formulario Invalido');
      return;
    }
    if (this.camion.id) {
      this.camionserv.actualizarCamion(this.camion, this.camion.id).subscribe(
        data => { console.log(data); }
      );
    } else {
      this.camionserv.crearCamion(this.camion)
        .subscribe(data => {
          console.log(data);
          this.camion = data;
        });
    }
  }

}
