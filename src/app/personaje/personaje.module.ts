import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajeRoutingModule } from './personaje-routing.module';
import { PersonajeComponent } from './personaje.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [PersonajeComponent],
  imports: [
    CommonModule,
    PersonajeRoutingModule,
    MatTableModule
  ]
})
export class PersonajeModule { }
