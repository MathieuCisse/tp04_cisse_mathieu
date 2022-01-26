import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {PanierState} from "../../store_panier/panier.state";
import {Produit} from "../../produit";
import {Panier} from "../../store_panier/panier.actions";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  produitInPanier$: Observable<Produit[]>;

  constructor(private store: Store) {
    this.produitInPanier$ = this.store.select(PanierState.getProduit);
  }

  ngOnInit(): void {
  }

  deletePanier(produit: Produit): void {
    this.store.dispatch(new Panier.Remove(produit));
  }

}
