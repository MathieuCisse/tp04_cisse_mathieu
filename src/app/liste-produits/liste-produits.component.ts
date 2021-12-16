import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../produit.service";
import {map, Observable} from "rxjs";
import {Produit} from "../produit";

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  filtre: string = "";
  observateurProduits: Observable<Produit[]> = new Observable<Produit[]>();

  constructor(private produitService : ProduitService) {}

  ngOnInit() : void {
    this.observateurProduits = this.produitService.getProduits();
  }

  updateValeurFiltre(nouvelleValeurFiltre : any) : void {
    if(isNaN(nouvelleValeurFiltre) && nouvelleValeurFiltre != "") {
      this.observateurProduits = this.produitService.getProduits().pipe(
        map(produits => produits.filter(
          produit => produit.libelle.includes(nouvelleValeurFiltre)
        ))
      );
    }
    else if(nouvelleValeurFiltre == "") {
      this.observateurProduits = this.produitService.getProduits();
    }
    else {
      console.log("prix");
      this.observateurProduits = this.produitService.getProduits().pipe(
        map(produits => produits.filter(
          produit => parseFloat(nouvelleValeurFiltre) > (produit.prix - 2)&& parseFloat(nouvelleValeurFiltre) < (produit.prix + 2)
        ))
      );
    }
  }

}
