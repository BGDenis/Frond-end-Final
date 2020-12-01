import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { PaqueteModel } from 'src/app/models/paquete.model';
import { PaquetesService } from 'src/app/servicios/paquetes.service';




@Component({
  selector: 'app-paquete',
  templateUrl: './paquete.component.html',
  styleUrls: ['./paquete.component.css']
})
export class PaqueteComponent implements OnInit {

  paquete: PaqueteModel = new PaqueteModel();

  constructor(private paqueteServ: PaquetesService,
    private rute: ActivatedRoute) { }

  ngOnInit(): void {
    const id: string = this.rute.snapshot.paramMap.get('id');
    console.log(id);

    if (id !== 'nuevo') {
      this.paqueteServ.getPaquete(id).subscribe(
        (resp: any) => {
          this.paquete = resp;
          this.paquete.id = resp._id;
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
    if (this.paquete.id) {
      this.paqueteServ.actualizarPaquete(this.paquete, this.paquete.id).subscribe(
        data=> { console.log(data); }
      );
    } else {
      this.paqueteServ.crearPaquete(this.paquete)
        .subscribe(data => {
          console.log(data);
          this.paquete = data;
        });
    }
  }
}
