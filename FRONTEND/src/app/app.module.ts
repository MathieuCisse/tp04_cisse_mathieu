import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {ProduitService} from "./produit.service";
import { ListeProduitsComponent } from './catalogue/liste-produits/liste-produits.component';
import { FiltreProduitsComponent } from './catalogue/filtre-produits/filtre-produits.component';
import { PanierComponent } from './panier/paniercomponent/panier.component';
import {NgxsModule} from "@ngxs/store";
import {PanierState} from "./store_panier/panier.state";
import { HomeComponent } from './home/home.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent,
    FiltreProduitsComponent,
    PanierComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxsModule.forRoot([PanierState]),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
      {path: 'catalogue', loadChildren: () => import('./catalogue/catalogue.module').then(m => m.CatalogueModule) },
      {path: 'panier', loadChildren: () => import('./panier/panier.module').then(m => m.PanierModule) },
      {path: '**', redirectTo: '', pathMatch: 'full'}
    ])
  ],
  providers: [ProduitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
