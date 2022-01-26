import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ListeProduitsComponent} from "./liste-produits/liste-produits.component";
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ListeProduitsComponent},
      {path: ':id', component: DetailComponent},
    ])
  ]
})
export class CatalogueModule { }
