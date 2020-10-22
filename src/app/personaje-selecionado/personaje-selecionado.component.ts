import { Component, OnInit } from '@angular/core';
import { Personaje } from '../personaje/personaje.model';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-personaje-selecionado',
  templateUrl: './personaje-selecionado.component.html',
  styleUrls: ['./personaje-selecionado.component.css']
})
export class PersonajeSelecionadoComponent implements OnInit {
  public people:Personaje = null
  constructor(private datosService:DataService) { }

  ngOnInit(): void {
 this.cargarInformacion( localStorage.getItem('personaje'));
  }
  cargarInformacion(url:string){
      this.datosService.get(url).subscribe(resp =>{
        this.people = resp;
      });
  }

  getPelicula(url:string){
    localStorage.setItem('pelicula',url);

  }
}
