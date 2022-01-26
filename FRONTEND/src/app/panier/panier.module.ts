import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {PanierComponent} from "./paniercomponent/panier.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PanierComponent},
    ])
  ]
})
export class PanierModule { }
