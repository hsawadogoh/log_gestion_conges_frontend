import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandesRoutingModule } from './demandes-routing.module';
import { ListDemandesComponent } from './list-demandes/list-demandes.component';
import { CreateUpdateDemandeComponent } from './create-update-demande/create-update-demande.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DetailDemandeComponent } from './detail-demande/detail-demande.component';


@NgModule({
  declarations: [
    ListDemandesComponent,
    CreateUpdateDemandeComponent,
    DetailDemandeComponent
  ],
  imports: [
    CommonModule,
    DemandesRoutingModule,
    ReactiveFormsModule
  ]
})
export class DemandesModule { }
