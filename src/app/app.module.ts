import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ConductorComponent } from './components/conductor/conductor.component';
import { HeaderComponent } from './components/header/header.component';

import { AppRoutingModule } from "./app-routing.module";

import { ConductoresService } from "../app/servicios/conductores.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { TablasComponent } from './components/tablas/tablas.component';
import { CamionesComponent } from './components/camiones/camiones.component';
import { CamionComponent } from './components/camion/camion.component';
import { PaquetesComponent } from './components/paquetes/paquetes.component';
import { PaqueteComponent } from './components/paquete/paquete.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ConductorComponent,
    HeaderComponent,
    TablasComponent,
    CamionesComponent,
    CamionComponent,
    PaquetesComponent,
    PaqueteComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ConductoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
