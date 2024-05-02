import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Alumnes} from "./alumnes.model";
import {Departament} from "./departament.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examennereatorralba';
  constructor(private http: HttpClient) {
    this.llistaAssigInfo()
    this.afegirDepartament()
    this.naiDe10()
  }

  llistaAssigInfo() {
    this.http.get<any>("http://localhost:3000/ex1").forEach((data) => {
      console.log(data);
    })
  }
  naiDe10() {
    this.http.get<Alumnes[]>("http://localhost:3000/ex3").subscribe((data) => {
      data.forEach((alumnes) => {
        let alum = new Alumnes(
          alumnes.ALUMN_DNI,
          alumnes.ALUMN_CASAT,
          alumnes.ALUMN_NOM ,
          alumnes.ALUMN_COGNOM_1 ,
          alumnes.ALUMN_COGNOM_2,
          alumnes.ALUMN_ADRECA,
          alumnes.ALUMN_CODI_POSTAL,
          alumnes.ALUMN_POBLACIO,
          alumnes.ALUMN_COMARCA,
          alumnes.ALUMN_TELEFON,
          alumnes.ALUMN_DATA_NAIXEMENT,
          alumnes.ALUMN_E_MAIL
        );

        console.log(alum)
      })
    })
  }

  afegirDepartament(){
    this.http.post<Departament>('http://localhost:3000/ex4', {
      codi:7, nom: "IT1", ubi:"Girona1", telf:"679901", dni:"5555"
    }).subscribe( response  => {
      if (response != null) {
        console.log("Department añadido correctamente! | ", response);
      }
    });
    console.log("funciona");
  }



}
