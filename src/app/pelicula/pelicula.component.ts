import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Pelicula } from './pelicula.model';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public pelicula:Pelicula;
  constructor(private datosService:DataService) { }

  ngOnInit(): void {
    this.cargarInformacion( localStorage.getItem('pelicula'));
  }

  cargarInformacion(url:string){
    this.datosService.get(url).subscribe(resp =>{
      this.pelicula= resp;
      console.log(resp)
    });
  }

  getPersonaje(url:string){
    localStorage.setItem('personaje',url);
  }
}
