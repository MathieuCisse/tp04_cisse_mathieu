import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {ProduitService} from "./produit.service";
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { FiltreProduitsComponent } from './filtre-produits/filtre-produits.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent,
    FiltreProduitsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
