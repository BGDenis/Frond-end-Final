import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CamionModel } from '../models/Camion.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CamionesService {
  ulrbase: string = 'https://app-practicafin.herokuapp.com/api';
  constructor(private http: HttpClient) { }
  getAllCamiones() {
    return this.http.get<any[]>(`${this.ulrbase}/camiones`);
  }

  getCamion(id: string){
    console.log('camion '+id);
    return this.http.get(`${this.ulrbase}/camiones/${id}`);
  }

  crearCamion(camion: CamionModel) {
    return this.http.post(`${this.ulrbase}/camiones`, camion).pipe(
      map((resp: any) => {
        camion.id = resp.camion._id;
        return camion;
      })
    );
  }

  actualizarCamion(camion: CamionModel,id: any) {
    const herotemp = {
      ...camion
    }
    delete herotemp.id;
    return this.http.put(`${this.ulrbase}/camiones/${id}`, herotemp);
  }

  borrarCamion(id: string){
    return this.http.delete(`${this.ulrbase}/camiones/${id}`)
  }

}
