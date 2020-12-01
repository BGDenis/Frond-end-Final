import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PaqueteModel } from "../models/paquete.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class PaquetesService {
  ulrbase: string = 'https://app-practicafin.herokuapp.com/api';
  constructor(private http: HttpClient) { }

  getAllPaquetes() {
    return this.http.get<any[]>(`${this.ulrbase}/paquetes`);
  }

  getPaquete(id: string) {
    console.log('paquete '+id);
    return this.http.get(`${this.ulrbase}/paquetes/${id}`);
  }

  crearPaquete(paquete: PaqueteModel) {
    return this.http.post(`${this.ulrbase}/paquetes`, paquete).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }

  actualizarPaquete(paquete: PaqueteModel,id: any) {
    const packtemp = {
      ...paquete
    }
    delete packtemp.id;
    return this.http.put(`${this.ulrbase}/paquetes/${id}`, packtemp);
  }
  
  borrarCamion(id: string){
    return this.http.delete(`${this.ulrbase}/paquetes/${id}`)
  }

}
