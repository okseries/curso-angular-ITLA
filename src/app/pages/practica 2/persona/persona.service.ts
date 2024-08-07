import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  public primeros_5_números_pares(id: number): boolean {



    return id % 2 === 0 && id < 6; 

  }


  public mostrarEventos(id: number) {
    if (this.primeros_5_números_pares(id)) {
      alert('hola');
      console.log(id);
    }
  }

  // public mostrarEventos(id: number) {
  //   switch (true) {
  //     case this.primeros_5_números_pares(id):
  //       alert('hola');
  //       console.log(id);
        

  //       break;

  //     default:
  //       break;
  //   }

  // }

}
