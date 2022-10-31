import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
providedIn:'root'

})

export class DatosService {

public equipo: any[] = [];

constructor(private http: HttpClient  ){

console.log('soy el servicio de datos listo para usar');
this.cargarEquipo();

}
private cargarEquipo(){
    this.http.get('https://miproyecto-84edf-default-rtdb.firebaseio.com/equipo.json')
.subscribe((res : any ) => {
this.equipo = res;

    console.log(res);

})
}

}

