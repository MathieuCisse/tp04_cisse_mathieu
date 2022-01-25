import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {ProduitService} from "./produit.service";
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { FiltreProduitsComponent } from './filtre-produits/filtre-produits.component';
import { PanierComponent } from './panier/panier.component';
import {NgxsModule} from "@ngxs/store";
import { TetiereComponent } from './tetiere/tetiere.component';
import {PanierState} from "./store_panier/panier.state";

@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent,
    FiltreProduitsComponent,
    PanierComponent,
    TetiereComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([PanierState])
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
