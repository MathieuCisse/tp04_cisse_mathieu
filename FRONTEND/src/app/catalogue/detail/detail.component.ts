import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Produit} from "../../produit";
import {PanierAction} from "../../store/panier_actions.actions";
import {Store} from "@ngxs/store";
import {map, Observable} from "rxjs";
import {ProduitService} from "../../produit.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  public currentProduit$: Observable<Produit[]> = new Observable<Produit[]>();

  constructor(private store: Store, private route: ActivatedRoute, private produitService : ProduitService ) { }

  ngOnInit(): void {
    this.currentProduit$ = this.produitService.getProduits().pipe(
      map(produits => produits.filter(
        produit => produit.id.toString() == this.route.snapshot.paramMap.get('id')
      ))
    );
  }


  addPanier(produit: Produit): void {
    this.store.dispatch(new PanierAction.Add(produit));
  }

}
