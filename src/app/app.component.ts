import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activoC1: boolean;
  title = 'BUENO';
}
/*
getByID(coleccion:string, id: any):Observable<any> {
    return this.getByIDQuuery(coleccion, id).
      pipe(map(data => {
        return Object.values(data);
      }));
  }*/