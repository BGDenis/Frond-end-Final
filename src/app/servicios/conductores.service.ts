import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Conductor } from "../interfaces/conductor";

@Injectable({
  providedIn: 'root'
})
export class ConductoresService {

  /*url local*/
  ulrbase: string = 'http://localhost:3000/api/camiones';

  constructor(private http: HttpClient) { }

  getAllCoductores() {
    return this.http.get<any[]>(this.ulrbase);
  }
}
