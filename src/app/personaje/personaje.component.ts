import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // <----
import { DataService } from '../shared/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { Personaje } from './personaje.model';
import { RouterLink } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
];
@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})

export class PersonajeComponent{

  personajes: Array<Personaje> = [];

  title = 'personajeApi';

  displayedColumns: string[] = ['name'];
  dataSource = this.personajes;

  constructor(public http: HttpClient, public dataService: DataService) {}

  @ViewChild(MatPaginator, {static:true}) paginador: MatPaginator;

  mostrarInformacion(){
    this.dataService.getAll().subscribe(resp=>{
      this.personajes=resp.results;
      console.log(resp)
      console.log(this.personajes)
      this.dataSource= this.personajes;
    })
  }
  ngOnInit(): void {
    this.mostrarInformacion();
 }
 selecionarPersonaje(url:string){
   console.log('dioclick')
   localStorage.setItem('personaje',url);
 }
}
