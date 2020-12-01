import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CamionesComponent } from "./components/camiones/camiones.component";
import { CamionComponent } from "./components/camion/camion.component";
import { PaquetesComponent } from "./components/paquetes/paquetes.component";
import { PaqueteComponent } from "./components/paquete/paquete.component";

const routes: Routes = [
  { path: 'paquetes', component: PaquetesComponent },
  { path: 'paquete/:id', component: PaqueteComponent },


  { path: 'camiones', component: CamionesComponent },
  { path: 'camion/:id', component: CamionComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'camiones' }
];


@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
